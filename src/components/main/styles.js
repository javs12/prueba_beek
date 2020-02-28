import { css } from 'glamor';

const styles = css({
    '.lyt-main':{
        display: 'flex',
        justifyContent:'center',
        background: '#E5E5E5',
    },
    ' .lty-main': {
        '&__body':{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            width: '375px',
            height: '667px',
            background: '#FFFFFF',
            overflow: 'hidden',
        },
        '&__nav':{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '375px',
            height: '64px',
            background: '#FFFFFF',
            borderBottom: '2px solid',
            ' h1': {
                padding: '10px 0px 0px 150px',
                width:'91px',
                height:'22px',
                fontFamily: 'SF Pro Text',
                fontSize: '17px',
                lineHeight: '22px',
                letterSpacing: '-0.0241176em',
                color: '#000000',
            },
            ' svg': {
                padding: '0px 0px 0px 100px',
                marginTop: '8px',
            }
        },
        '&__content':{
            width: '375px',
            height: '603px',
            overflow: 'scroll',
        }
    },
});

export default styles;
