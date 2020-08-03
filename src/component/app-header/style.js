import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  height: 70px;
  background-color: #242424;
  .content{
    display: flex;
    width: 1100px;
    height: 70px;
    margin: 0 auto;
    .logo{
      width:176px;
      height:70px;
      a{
        display:block;
        width:156px;
        height:70px;
        padding-right:20px;
        box-sizing:content-box;
      }
    }
    .select-list{
      display:flex;
      .item{
        position:relative;
        line-height:70px;
        color: #ccc;
        padding:0 19px;
        font-size:14px;

      }
      .item:hover{
        color:#fff;
        background-color: #000;
      }
      .active{
        color:#fff;
        background-color: #000;
        .icon{
          position:absolute;
          bottom:0;
          left:50%;
          margin-left:-6px;
          display:block;
          background-position:-226px 0;
          width:12px;
          height:6px;
        }
      }
      .item:last-child:after{
        position:absolute;
        content:'';
        background-image:url(${require("@/assets/img/topbar.png")});
        background-position:-192px 0;
        width:26px;
        height:13px;
        top:10px;
      }
    }
    .search{
      width:158px;
      height:32px;

      margin-top:19px;
      margin-left:50px;
      border-radius:16px;
      .ant-input-affix-wrapper{
        border-radius:16px;
      }
      input{
        font-size:12px;
        &::placeholder{
          font-size:12px;
        }
        
      }
    }
    .bilog{
      display:inline-block;
      width:90px;
      height:32px;
      margin-top:19px;
      margin-left:20px;
      color:#ccc;
      border:1px solid #ccc;
      font-size:12px;
      display:flex;
      align-items:center;
      justify-content:center;
      border-radius:20px;
      &:hover{
        color:#fff;
        border-color:#fff;
      }
    }
    .login{
      display: inline-block;
      color: #787878;
      width:28px;
      height:17px;
      margin-top:26px;
      transition: none;
      margin-left:20px;
      font-size:12px;
      &:hover{
        color: #999;
        text-decoration: underline;
      }
    }
  }
`
