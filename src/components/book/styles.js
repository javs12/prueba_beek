import { css } from 'glamor';

const styles = (progress) => css({
        display:'flex',
        ' .book':{
            '&__img':{
                width: '100px',
                height: '100px',
                marginLeft:'16px',
                marginRight: '12px',
                marginTop: '24px',
                ' img':{
                    width: '100%',
                    height: '100%',
                    border: '1px solid rgba(38, 37, 37, 0.15)',
                    borderRadius: '6px',
                }
            },
            '&__content': {
                '&__title': {
                    display: 'flex',
                    ' > p': {
                        width: '193px',
                        height: '24px',
                        marginTop: '24px',
                        fontFamily: 'Nunito Sans',
                        fontStyle: 'normal',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        lineHeight: '20px',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                    },
                    ' > svg': {
                        marginTop: '24px',
                    }
                },
                '&__author': {
                    width: '193px',
                    height: '20px',
                    fontFamily: 'Nunito Sans',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontSize: '14px',
                    lineHeight: '21px',
                },
                '&__narrator': {
                    width: '193px',
                    height: '20px',
                    fontFamily: 'Nunito Sans',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontSize: '12px',
                    lineHeight: '19px',
                    color: 'rgba(38, 37, 37, 0.7)',
                },
                '&__progress': {
                    display: 'flex',
                    alignItems:'center',
                    ' div': {
                        width: '187px',
                        height: '4px',
                        background: '#EDF1F3',
                        borderRadius: '6px',
                        ' div': {
                            width: `${progress}%`,
                            height: '4px',
                            background: progress === 100 
                                ? '#36DCA5' 
                                : 'linear-gradient(270deg, #36D7DC 0%, #47BDF1 100%)',
                            borderRadius: '6px',
                        }
                    },
                    ' label':{
                        width: '36px',
                        height: '16px',
                        fontFamily: 'Nunito Sans',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontSize: '12px',
                        lineHeight: '19px',
                        color: '#262525',
                    }

                },
                '&__download': {
                    ' svg': {
                        width: '15px',
                        height: '15px',
                        marginRight: '5px',
                        ' path': {
                            'fill': '#36DCA5',
                        }
                    },
                    ' label': {
                        fontFamily: 'Nunito Sans',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontSize: '12px',
                        lineHeight: '19px',
                        color: 'rgba(38, 37, 37, 0.7)',
                    },
                    ' #str_progress': {
                        float: 'right',
                    }
                }

            }
        }
});

export default styles;
