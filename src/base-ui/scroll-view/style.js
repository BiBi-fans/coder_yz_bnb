import styled from "styled-components";

export const ScrollWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  /* border-right: 8px solid transparent; */
  padding: 8px 0;
  
  &::-webkit-scrollbar {
        display: none;
    } 
   
  .content{
    position: relative;
    overflow: hidden;
    .left-bg{
      position: absolute;
      top: 0;
      left: -14px;
      z-index: 8;
      width: 60px;
      height: 100%;
      background: linear-gradient(to right, #fff, transparent);
    }
    .right-bg{
      position: absolute;
      top: 0;
      right: -14px;
      z-index: 8;
      width: 60px;
      height: 100%;
      background: linear-gradient(to left, #fff, transparent);
    }
    .scroll{
      display: flex;
      white-space: nowrap;
      transition: transform 250ms ease;
    }  
  }



  .control {
    position: absolute;
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    text-align: center;
    border-width: 2px;
    border-style: solid;
    border-color: #fff;
    background: #fff;
    box-shadow: 0px 1px 1px 1px rgba(0,0,0,.14);
    cursor: pointer;

    &.left {
      left: 0;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    &.right {
      right: 0;
      top: 50%;
      transform: translate(50%, -50%);
    }
  } 
`