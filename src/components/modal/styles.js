import { css } from 'glamor';


const slidein = css.keyframes({ 
    'from': {
        marginTop: '100%',
      },
    'to': {
        marginTop: '0%',
    }
  })

const styles = (status) => css({
    '.modal': {
        position: 'absolute',
        display: status ? 'block' : 'none',
        width: '375px',
        height: '667px',
        animationDuration: '0.5s',
        animationName: `${slidein}`,
    },
    ' .modal': {
        '&__no__content':{
            width: '375px',
            height: '400px',
            background: '#262525',
            opacity: '0.7',
        },
        '&__content':{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            width: '375px',
            height: '267px',
            background: '#FFFFFF',
            boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.15)',
            borderRadius: '6px 6px 0px 0px',
            ' div':{
                ' input':{
                    marginLeft: '10px',
                    backgroundColor: '#c3e3fc',
                },
                ' label':{
                    marginLeft: '10px',
                    fontFamily: 'Nunito Sans',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontSize: '16px',
                    lineHeight: '24px',
                }
            },
            ' .cancel':{
                display: 'flex',
                justifyContent: 'center',
                ' .btn__cancel':{
                    width: '327px',
                    height: '48px',
                    background: '#6FE2E6',
                    borderRadius: '100px',
                    fontFamily: 'Nunito Sans',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontSize: '16px',
                    lineHeight: '22px',
                }
            }
        }
    }

});

export default styles;
