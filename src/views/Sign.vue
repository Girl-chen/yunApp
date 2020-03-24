<template>
  <div class="sign" >
    <div class="sign-in" v-if="code==='sign-in'">
      <div class="logo" @click="toSign">
        <div class="one"></div>
        <div class="two"></div>
      </div>
      <div class="username">
        <i class="iconfont icon-yonghu"></i>
        <input type="text" placeholder="username">
      </div>
      <div class="password">
        <i class="iconfont icon-ziyuanxhdpi"></i>
        <input :type="pwdtype?'password':'text'" placeholder="password">
        <i class="iconfont icon-chakan2 showpwd" @mousedown="showpwd" @mouseup="showpwd"></i>
      </div>
      <div class="tips">
        <!-- <p class="tip-sign-up">TO-SIGNUP</p> -->
        <p class="tip-forget">forget password?</p>
      </div>
      <div class="submit">
        <button class="btn-submit">sign in</button>
      </div>
    </div>

    <div class="sign-up" v-else>
      <div class="logo" @click="toSign">
        <div class="one"></div>
        <div class="two"></div>
      </div>
      <div class="username">
        <i class="iconfont icon-yonghu"></i>
        <input type="text" placeholder="username">
      </div>
      <div class="password">
        <i class="iconfont icon-ziyuanxhdpi"></i>
        <input :type="pwdtype?'password':'text'" placeholder="password">
      </div>
      <div class="email">
        <i class="iconfont icon-youxiang_huaban"></i>
        <input type="text" placeholder="your email">
      </div>
      <!-- 验证码 -->
      <div class="vcode">  
        <input type="text" placeholder="verification code">
        <van-button class="btn-vcode" color="rgb(17, 70, 139)" round type="info">验证码</van-button>
      </div>
      <div class="submit">
        <button class="btn-submit">sign up</button>
      </div>
    </div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      pwdtype: true,
      code: 'sign-in'
    };
  },
  created(){
    this.code = this.$route.query.sign?this.$route.query.sign: 'sign-in'
  },
  mounted(){
    
  },
  methods: {
    showpwd(){
      this.pwdtype = !this.pwdtype
    },

    toSign(){
      this.$router.push({
        path: '/sign',
        query:{
          sign: 'sign-in'
        }
      })
    }
  }
}
</script>
<style lang='scss' scoped>
  $color: rgb(214, 214, 214);
  .sign{
    height: 100%;
    background: url('../assets/sign02.jpg') no-repeat ;
    background-size: 100% 100%;

    .sign-in{
      padding: 0 3rem;
      text-align: left;
      box-sizing: border-box;
      padding-top: 5%;

      .iconfont{
        color: $color;
      }
      input{
        background: transparent;
        margin-left: 1rem;
        padding: 0.5rem 0;
        border: none;
        color: $color;
      }

      .logo{
        width: 15rem;
        height: 15rem;
        border-radius: 1rem;
        background: transparent;
        margin: 0 auto;
        margin-bottom: 10rem;
        position: relative;

        .one{
          background: linear-gradient(rgb(250, 250, 250), #aaaaaa);
          width: 20px;
          height: 50px;
          transform: rotate(-45deg);
          position: absolute;
          left: 5rem;
          bottom: 2rem;
        }
        .two{
          background: rgb(240, 240, 240);
          width: 20px;
          height: 100px;
          transform: rotate(45deg);
          position: absolute;
          left: 9rem;
          bottom: 0.4rem;
        }
      }

      .username, .password{
        border-bottom: 0.1rem solid $color;
        padding: 0.4rem 0;
        display: flex;
        justify-content: left;
        align-items: center;
        margin-bottom: 1rem;

        .iconfont{
          // padding: 1rem 1rem 1rem 0;
        }
        .iconfont.showpwd{
          padding: 1rem;
        }
        input{
          flex-grow: 1;
        }
        input::-webkit-input-placeholder{
          color: $color;
        }
        input:-moz-placeholder{
          color: $color;
        }
        input::-moz-placeholder{
          color: $color;
        }
        input:-ms-input-placeholder{
          color: $color;
        }
      }

      .tips{
        // display: flex;
        // justify-content: space-between;
        margin-bottom: 3rem;
          p.tip-sign-up{
            text-align: right;
            font-weight: bolder;
            color: rgb(116, 116, 116);
            margin-bottom: 1rem;
          }
          p.tip-forget{
            text-align: right;
            color: rgb(116, 116, 116);
          }
        }

      .submit{
        width: 100%;
        margin: auto;

        .btn-submit{
          width: 100%;
          height: 3rem;
          border: none;
          background: red;
          color: white;
          border-radius: 100rem;
        }
      }
    }

    .sign-up{
      padding: 0 3rem;
      text-align: left;
      box-sizing: border-box;
      padding-top: 5%;

      .iconfont{
        color: $color;
      }
      input{
        background: transparent;
        margin-left: 1rem;
        padding: 0.5rem 0;
        border: none;
        color: $color;
      }

      .logo{
        width: 15rem;
        height: 8rem;
        border-radius: 1rem;
        background: transparent;
        margin: 0 auto;
        margin-top: 6rem;
        margin-bottom: 5rem;
        position: relative;

        .one{
          background: linear-gradient(rgb(250, 250, 250), #aaaaaa);
          width: 20px;
          height: 50px;
          transform: rotate(-45deg);
          position: absolute;
          left: 5rem;
          bottom: 2rem;
        }
        .two{
          background: rgb(240, 240, 240);
          width: 20px;
          height: 100px;
          transform: rotate(45deg);
          position: absolute;
          left: 9rem;
          bottom: 0.4rem;
        }
      }

      .username, .password, .email, .vcode{
        border-bottom: 0.1rem solid $color;
        padding: 0.4rem 0;
        display: flex;
        justify-content: left;
        align-items: center;
        margin-bottom: 1rem;

        input{
          flex-grow: 1;
        }
        input::-webkit-input-placeholder{
          color: $color;
        }
        input:-moz-placeholder{
          color: $color;
        }
        input::-moz-placeholder{
          color: $color;
        }
        input:-ms-input-placeholder{
          color: $color;
        }
      }

      .vcode{
        display: flex;
        margin-bottom: 5rem;
        border-bottom: none;

        input{
          flex-grow: 1;
          margin-left: 0;
          margin-right: 1.5rem;
          border-bottom: 0.1rem solid $color;
          padding: 0 0 1rem 0;
        }
        .btn-vcode{
          width: 8rem;
          height: 3rem;
          line-height: 3rem;
        }
      }

      .submit{
        width: 100%;
        margin: auto;

        .btn-submit{
          width: 100%;
          height: 3rem;
          border: none;
          background: red;
          color: white;
          border-radius: 100rem;
        }
      }
    }
  }
</style>