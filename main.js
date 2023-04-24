const { ref } = Vue
const app = {
    setup() {
        const useData = ref({
            'content': [
                '具競爭力的薪資水準',
                '提供員工每個月伙食津貼',
                '加班費依實按勞基法給付',
                '提供完整教育訓練及進修學習機會，鼓勵員工考取專業證照',],
            'imgLink': './photo/towfiqu-barbhuiya-jpqyfK7GB4w-unsplash.jpg',
            'isHovering': true
        })
        const companyBenifit = ref({
            '薪資獎金': {
                'content': [
                    '具競爭力的薪資水準',
                    '提供員工每個月伙食津貼',
                    '加班費依實按勞基法給付',
                    '提供完整教育訓練及進修學習機會，鼓勵員工考取專業證照',],
                'imgLink': './photo/towfiqu-barbhuiya-jpqyfK7GB4w-unsplash.jpg',
                'isHovering': true
            },
            '員工福利': {
                'content': [
                    '按月提繳勞工退休金，於員工達到法定退休條件時依法給付退休金',
                    '任期滿一年提供員工定期健康檢查',
                    '任期滿三個月仍在職者，提供端午、中秋與春節獎金',],
                'imgLink': './photo/dylan-gillis-KdeqA3aTnBY-unsplash.jpg',
                'isHovering': false
            },
            '休假': {
                'content': [
                    '提供員工請休特別休假、婚假、生理假，合乎勞基法規定之休假',
                    '生日當月提供有薪生日假一天'],
                'imgLink': './photo/benjamin-davies-JrZ1yE1PjQ0-unsplash.jpg',
                'isHovering': false
            },
            '保險': {
                'content': [
                    '除了依法投保勞工保險、全民健康保險',
                    '提供員工投保團體保險'],
                'imgLink': './photo/javier-allegue-barros-C7B-ExXpOIE-unsplash.jpg',
                'isHovering': false
            }
        })

        // 當hover到那個的時候就
        const hoverCompany = (benifit) => {
            Object.values(companyBenifit.value).forEach((item) => {
                item.isHovering = false
            })
            companyBenifit.value[benifit].isHovering = true
            useData.value = companyBenifit.value[benifit]
            // console.log(useData.value.isHovering)
        }

        return { useData, companyBenifit, hoverCompany }
    }
}

Vue.createApp(app).mount('#app')
