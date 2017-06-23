function changeFontSizeRe(num){
    switch (+num) {
        case 0:
            $('#fontSizeContainer>div>a').removeClass('active');
            $('#fontSizeContainer>div>a.small').addClass('active');
            $('.member-content-container,.corporate-content-container,.charities-content-container').css('font-size','90%');
            break;
        case 1:
            $('#fontSizeContainer>div>a').removeClass('active');
            $('#fontSizeContainer>div>a.medium').addClass('active');
            $('.member-content-container,.corporate-content-container,.charities-content-container').css('font-size','100%');
            break;
        case 2:
            $('#fontSizeContainer>div>a').removeClass('active');
            $('#fontSizeContainer>div>a.large').addClass('active');
            $('.member-content-container,.corporate-content-container,.charities-content-container').css('font-size','120%');
            break;
    }
}