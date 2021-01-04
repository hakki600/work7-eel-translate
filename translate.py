from googletrans import Translator

class MyTranslator:
    @staticmethod
    def translate(org_text,src_lang,dest_lang):
        tr = Translator(service_urls=['translate.googleapis.com'])
        # エラーが出る時と出ない時があるので、
        # 成功するまでインスタンスを作り直してから再度実行
        i = 0
        while i < 10:
            try:
                return tr.translate(org_text, src=src_lang, dest=dest_lang).text
            except Exception as e:
                tr = Translator(service_urls=['translate.googleapis.com'])
                i+=1


