import styled from "styled-components";



const RightWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    .btns{
        display: flex;
        flex-direction: row;
        align-items: center;
        color:${props => props.theme.text.secondaryColor};

        &>span{
            margin: 0 5px;
            cursor: pointer;
        }
    }
    .profile{
        position: relative;
        margin-right: 15px;
        display: flex;
        flex-direction: row;
        align-items: center;
        color:${props => props.theme.text.primaryColor};
        ${props => props.theme.mixin.boxShadow};

        &>svg{
            margin: 0 5px;
        }
        &>svg:hover{
            cursor: pointer;
        }

        .panel{
            position: absolute;
            top: 54px;
            right: 0;
            width: 240px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 0 6px rgba(0,0,0,.2);
            color: #666;

            .top,.bottom{
                padding: 10px 0;
                .item{
                    height: 40px;
                    line-height: 40px;
                    padding: 0 16px;
                    &:hover{
                        background-color: #f5f5f5;
                        cursor: pointer;
                    }
                }
            }
            .top{
                border-bottom: 1px solid #ddd;
            }
        }
    }
   
   
    
`

export default RightWrapper