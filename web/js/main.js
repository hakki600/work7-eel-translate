// 翻訳関数をpythonから呼ぶ
async function translate(src, src_lang, dest_lang) {
    let ret = await eel.translate(src, src_lang, dest_lang)();
    return ret;
}

// 翻訳ボタンクリックイベント
var translate_btn = document.getElementById('translate-btn');
var lang_radio_btn = document.getElementById( "custom-radio-1" );
translate_btn.addEventListener('click', () => {
    var src_lang = 'en'
    var dest_lang = 'ja'
    // 日英or英日 切り替え
    if ( lang_radio_btn.checked ) {
        var src_lang = 'ja'
        var dest_lang = 'en'
    } 
    let original = document.getElementById('input')
    let translated = document.getElementById('output')
    if (original.value) {
        promise = translate(original.value, src_lang, dest_lang);
        promise.then((ret) => {
            translated.value = ret
            });
        }
})

// 翻訳ボタンの文字列をVueで操作
Vue.config.productionTip = false
var app = new Vue({
    el: '#app',
    data: {
        trans_str: '翻訳'
    }
})

