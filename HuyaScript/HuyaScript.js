// ==UserScript==
// @name			H2P: 虎牙自动禁言
// @namespace		http://tampermonkey.net/
// @version			0.0.4
// @icon			https://a.msstatic.com/huya/h5player/room/2006231627/src/img/output/replay-fornotice-icon.png
// @description		虎牙自动禁言
// @author			H2P
// @compatible		chrome
// @match			*://*.huya.com/*
// @note			2020.06.24-V0.0.01  	虎牙自动禁言
// @note			2020.06.24-V0.0.02  	修复手动禁言不显示的 BUG
// @note			2020.06.25-V0.0.03  	修复字母直播间无法使用的 BUG
// @note			2020.07.09-V0.0.04  	识别弹幕忽略空格，自动关闭个人信息
// ==/UserScript==

(function() {
    'use strict';

    const $H2P = function (xpath, one = true) {
        if (one) { return document.querySelector(xpath); }
        else { return Array.from(document.querySelectorAll(xpath)); }
    }
    
    const myKeyCode = {
		'a': 65, 'b': 66, 'c': 67, 'd': 68, 'e': 69, 'f': 70, 'g': 71,
		'h': 72, 'i': 73, 'j': 74, 'k': 75, 'l': 76, 'm': 77, 'n': 78,
		'o': 79, 'p': 80, 'q': 81, 'r': 82, 's': 83, 't': 84,
		'u': 85, 'v': 86, 'w': 87, 'x': 88, 'y': 89, 'z': 90,
    }
    
    const HuyaMute = 'h2p-huya-config-mute';
    let config_mute_pre = {
        EYiShuaPing: {
            time    : '1800',
            keyWords: [],
        },
        ManMa: {
            time    : '1800',
            keyWords: [],
        },
        ShuaGuangGao: {
            time    : '1800',
            keyWords: [],
        }
	};
	let config_mute = {};
	Object.assign(config_mute, config_mute_pre);
	let config_mute_tmp = JSON.parse(localStorage.getItem(HuyaMute)) || {};
	Object.assign(config_mute, config_mute_tmp);
	for (let key in config_mute) { if (!(key in config_mute_pre)) { delete config_mute[key]; } }
	localStorage.removeItem(HuyaMute);
	localStorage.setItem(HuyaMute, JSON.stringify(config_mute));

    new Promise((resolve, reject) => {
        let style = document.createElement('style');
        style.innerHTML = `
            #h2p-huya-script {
                position        : fixed;
                top             : 60px;
                left            : 0;
                width           : 450px;
                height          : 325px;
                border-radius   : 0 0 10px 0;
                padding         : 10px;
                background      : #eeeeee;
                z-index         : 100000;
            }
            .h2p-huya-div {
                display         : flex;
                flex-flow       : row wrap;
                justify-content : space-between;
            }
            .h2p-huya-layer {
                justify-content : flex-start;
                width           : 140px;
            }
            .h2p-huya-textarea {
                width           : 130px;
                height          : 265px;
                padding         : 5px;
                resize          : none;
                font-size       : 10px;
                line-height     : 15px;
            }
            .h2p-huya-button {
                width           : 100%;
                height          : 25px;
                border          : none;
                border-radius   : 5px;
                background-color: #00deba;
                cursor          : pointer;
                outline         : none;
                transition      : all 0.5s;
            }
            .h2p-huya-button:hover {
                background-color: #00ccaa;
            }
            .h2p-huya-button-active {
                background-color: #99aaff;
                transition      : all 0.5s;
            }
            .h2p-huya-button-active:hover {
                background-color: #8899cc;
            }
        `;
        document.body.appendChild(style);

        let div = document.createElement('div');
        div.id = 'h2p-huya-script';
        div.style = 'display: none';
        div.innerHTML = `
            <div class="h2p-huya-div">
                <div class="h2p-huya-layer">
                    <label>恶意刷屏：</label>
                    <select id="h2p-huya-select-EYiShuaPing">
                        <option value="1800">30 分钟</option>
                        <option value="86400">1 天</option>
                        <option value="259200">3 天</option>
                        <option value="604800">7 天</option>
                    </select>
                    <textarea id="h2p-huya-textarea-EYiShuaPing" class="h2p-huya-textarea"></textarea>
                </div>
                <div class="h2p-huya-layer">
                    <label>谩骂：</label>
                    <select id="h2p-huya-select-ManMa">
                        <option value="1800">30 分钟</option>
                        <option value="86400">1 天</option>
                        <option value="259200">3 天</option>
                        <option value="604800">7 天</option>
                    </select>
                    <textarea id="h2p-huya-textarea-ManMa" class="h2p-huya-textarea"></textarea>
                </div>
                <div class="h2p-huya-layer">
                    <label>刷广告：</label>
                    <select id="h2p-huya-select-ShuaGuangGao">
                        <option value="1800">30 分钟</option>
                        <option value="86400">1 天</option>
                        <option value="259200">3 天</option>
                        <option value="604800">7 天</option>
                    </select>
                    <textarea id="h2p-huya-textarea-ShuaGuangGao" class="h2p-huya-textarea"></textarea>
                </div>
            </div>
            <div class="h2p-huya-div">
                <button id="h2p-huya-button" class="h2p-huya-button">启动</button>
            </div>
        `;

        document.body.appendChild(div);

        resolve();
    })
    .then(() => {
        let div = $H2P('div#h2p-huya-script');
        div.addEventListener('change', (e) => {
            const target = e.target;
            if (target.tagName.toLowerCase() !== 'select') return;

            const value = target.selectedOptions[0].value;
            if (target.id === 'h2p-huya-select-EYiShuaPing') {
                config_mute.EYiShuaPing.time = value;
            } else if (target.id === 'h2p-huya-select-ManMa') {
                config_mute.ManMa.time = value;
            } else if (target.id === 'h2p-huya-select-ShuaGuangGao') {
                config_mute.ShuaGuangGao.time = value;
            }

            localStorage.setItem(HuyaMute, JSON.stringify(config_mute));
        });

        div.addEventListener('input', (e) => {
            const target = e.target;
            if (target.tagName.toLowerCase() !== 'textarea') return;

            const value = target.value;
            if (target.id === 'h2p-huya-textarea-EYiShuaPing') {
                config_mute.EYiShuaPing.keyWords = value.split('\n');
            } else if (target.id === 'h2p-huya-textarea-ManMa') {
                config_mute.ManMa.keyWords = value.split('\n');
            } else if (target.id === 'h2p-huya-textarea-ShuaGuangGao') {
                config_mute.ShuaGuangGao.keyWords = value.split('\n');
            }

            localStorage.setItem(HuyaMute, JSON.stringify(config_mute));
        });

        let button = $H2P('button#h2p-huya-button');
        button.addEventListener('click', () => {
            button.classList.toggle('h2p-huya-button-active');
            button.textContent = button.classList.contains('h2p-huya-button-active') ? '启动中' : '启动';
            setINVL_checkMsg();
        });
    })
    .then(() => {
        const times = ['1800', '86400', '259200', '604800'];
        for (let i = 0; i < times.length; i++) {
            if (config_mute.EYiShuaPing.time === times[i]) {
                $H2P('select#h2p-huya-select-EYiShuaPing').selectedIndex = i;
            }
            if (config_mute.ManMa.time === times[i]) {
                $H2P('select#h2p-huya-select-ManMa').selectedIndex = i;
            }
            if (config_mute.ShuaGuangGao.time === times[i]) {
                $H2P('select#h2p-huya-select-ShuaGuangGao').selectedIndex = i;
            }
        }
        $H2P('textarea#h2p-huya-textarea-EYiShuaPing').value = Array.isArray(config_mute.EYiShuaPing.keyWords) ? config_mute.EYiShuaPing.keyWords.join('\n') : '';
        $H2P('textarea#h2p-huya-textarea-ManMa').value = Array.isArray(config_mute.ManMa.keyWords) ? config_mute.ManMa.keyWords.join('\n') : '';
        $H2P('textarea#h2p-huya-textarea-ShuaGuangGao').value = Array.isArray(config_mute.ShuaGuangGao.keyWords) ? config_mute.ShuaGuangGao.keyWords.join('\n') : '';
    })
    .then(() => {
        document.addEventListener('keydown', (e) => {
			if (e.shiftKey && e.which == myKeyCode.j) {
                $H2P('div#h2p-huya-script').style.display = $H2P('div#h2p-huya-script').style.display === 'none' ? '' : 'none';
            }
		});
    })

    let checkMsg = null;
    let minDataID = -1;             // 检测弹幕开始编号
    let muteUser = null;
    function setINVL_checkMsg() {
        if (checkMsg) {
            window.clearInterval(checkMsg);
            window.clearInterval(muteUser);
            checkMsg = null;
            muteUser = null;
            return;
        }
        checkMsg = setInterval(() => {
            if (muteUser) { return; }
            let msgs = $H2P('ul#chat-room__list > li', false).filter(ele => Number(ele.getAttribute('data-id')) > minDataID);
            let index = -1;
            let time = undefined;
            for (let i = 0; i < msgs.length; i++) {
                let ele = msgs[i];
                minDataID = Number(ele.getAttribute('data-id'));
                if (ele.querySelector('span.msg') && ele.querySelector('span.name.J_userMenu')) {
                    let user = ele.querySelector('span.name.J_userMenu').textContent;
                    let msg = ele.querySelector('span.msg').textContent.replace(/\s*/g, '');
                    // 判断是否存在满足禁言的弹幕
                    for (let j = 0; j < config_mute.EYiShuaPing.keyWords.length && !time; j++) {
                        let keyWord = config_mute.EYiShuaPing.keyWords[j];
                        if (keyWord.length > 0 && msg.includes(keyWord)) {
                            index = 1;
                            time = config_mute.EYiShuaPing.time;
                            break;
                        }
                    }
                    for (let j = 0; j < config_mute.ManMa.keyWords.length && !time; j++) {
                        let keyWord = config_mute.ManMa.keyWords[j];
                        if (keyWord.length > 0 && msg.includes(keyWord)) {
                            index = 2;
                            time = config_mute.ManMa.time;
                            break;
                        }
                    }
                    for (let j = 0; j < config_mute.ShuaGuangGao.keyWords.length && !time; j++) {
                        let keyWord = config_mute.ShuaGuangGao.keyWords[j];
                        if (keyWord.length > 0 && msg.includes(keyWord)) {
                            index = 3;
                            time = config_mute.ShuaGuangGao.time;
                            break;
                        }
                    }
                }
                if (time) {
                    ele.querySelector('span.name.J_userMenu').click();
                    // 开始禁言
                    muteUser = setInterval(() => {
                        let style = document.createElement('style');
                        style.id = 'h2p-huya-style-mute';
                        style.innerHTML = `
                            #duya-header, #J_mainWrap, #J_roomBd,
                            .mod-sidebar, .duya-header-wrap {
                                z-index         : 99999;
                            }
                            #J_mainWrap, #main_col {
                                background-color: #f4f5f8;
                            }
                            .dlg {
                                display: none!important;
                            }
                        `;
                        if (!$H2P('style#h2p-huya-style-mute')) {
                            document.body.appendChild(style);
                            // console.log('隐藏禁言选项框');
                        }
                        if ($H2P('div.ucard-box li[data-code="MUTE"]')) {
                            window.clearInterval(muteUser);
                            $H2P('div.ucard-box li[data-code="MUTE"]').click();
                            muteUser = setInterval(() => {
                                if ($H2P(`div.dlg-bd div.cause select#J_dlgMuteCause`)) {
                                    window.clearInterval(muteUser);
                                    // 选择禁言类型
                                    $H2P(`div.dlg-bd div.time input[value="${time}"]`).checked = true;
                                    $H2P(`div.dlg-bd div.cause select#J_dlgMuteCause`).selectedIndex = index;
                                    $H2P(`div.dlg-ft a.dlg-btn-orange`).click();
                                    console.log(`禁言 ${ele.querySelector('span.name.J_userMenu').textContent}`);
                                    muteUser = setInterval(() => {
                                        if ($H2P(`div.dlg-ft a.dlg-btn-orange`)) {
                                            $H2P(`div.dlg-ft a.dlg-btn-orange`).click();
                                            if ($H2P('style#h2p-huya-style-mute')) {
                                                $H2P('style#h2p-huya-style-mute').remove();
                                            }
                                            // console.log('显示禁言选项框');
                                            $H2P('i.ucard-x').click();          // 关闭个人资料
                                            window.clearInterval(muteUser);
                                            muteUser = null;
                                        }
                                    }, 50);
                                }
                            }, 50);
                        }
                    }, 50);
                    break;
                };
            }
        }, 500);
    }
})();