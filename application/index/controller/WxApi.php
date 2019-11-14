<?php
/**
 * Created by PhpStorm.
 * User: apple
 * Date: 2019/8/27
 * Time: 16:35
 *
 *
 *  获取openid & access_token ： 1.获取code 2.即可获取openID和access_token
 *  获取user_info: 通过openid & access_token获取（scope=snsapi_userinfo）
 *
 *  模板消息推送：1.获取要接收用户的openid
 *             2.获取access_token并存在cookie，有效时间2h(7200s)
 *
 */

namespace app\index\controller;


class WxApi
{


    const APP_ID = 'wx8bdfaf6a61d4d23e';
    const APP_SECRECT = 'bd0192b54b7132529d2d39e99a6550e9';

    //请求模板消息的地址
    const TEMP_URL = 'https://api.weixin.qq.com/cgi-bin/message/template/send?access_token=';


    //获取code ->获取openID
    public function open(){
        //回调url，公众号设置-功能设置-网页授权域名
        $url="http://www.xiangken.com/index/xken/index";
        $web = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=". self::APP_ID ."&redirect_uri=".$url."&response_type=code&scope=snsapi_base&state=STATE&#wechat_redirect";
        header("Location:".$web);
    }

    //获取openID、access_token => 获取userinfo
    public function getOpenId(){

        $code = $_GET["code"];
        $get_token_url = 'https://api.weixin.qq.com/sns/oauth2/access_token?appid='.self::APP_ID.'&secret='.self::APP_SECRECT.'&code='.$code.'&grant_type=authorization_code';
        $res = $this->curlPost($get_token_url);
        $json_obj = json_decode($res,true);

        //根据openid和access_token查询用户信息
        $access_token = $json_obj['access_token'];
        $openid = $json_obj['openid'];

        /** 进一步过获取userinfo，但是上一步获取code的时候要 scope=snsapi_userinfo **/
         $get_user_info_url = 'https://api.weixin.qq.com/sns/userinfo?access_token='.$access_token.'&openid='.$openid.'&lang=zh_CN';
         $res = $this->curlPost($get_user_info_url);

         //解析json
         $user_obj = json_decode($res,true);
//         $_SESSION['user'] = $user_obj;
        return $user_obj;
    }


    /**
     * 获取access_token 存储在cookie
     * @return mixed
     */
    public function getAccessToken(){

        if ($_COOKIE['access_token']){
            $access_token2=$_COOKIE['access_token'];
        }else{
            $url = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' . self::APP_ID . '&secret=' . self::APP_SECRECT;
            $json_token=$this->curlPost($url);
            $access_token1=json_decode($json_token,true);
            $access_token2=$access_token1['access_token'];
            setcookie('access_token',$access_token2,7200);
        }

        return $access_token2;
    }


    /**
     * 微信模板消息发送
     * @param $openid 接收用户的openid
     * return 发送结果
     *
     *  使用方法：
     *  $weChat = new WxTmp();
        $weChat->send($openid);
     *
     */
    public function send($openid){
        $tokens = $this->getAccessToken();
        $url = self::TEMP_URL . $tokens;
        $params = [
            'touser' => $openid,
            'template_id' => '5z8tnx1UsKpidcr07sPns1kNpZ-YS5ieQNiP_bpHleE',//模板ID
            'url' => '#', //点击详情后的URL可以动态定义
            'data' =>
                [
                    'first' =>
                        [
                            'value' => '您好!first测试成功！',
                            'color' => '#173177'
                        ],
                    'keyword1' =>
                        [
                            'value' => '测试',
                            'color' => '#FF0000'
                        ],

                    'keyword2' =>
                        [
                            'value' => '99',
                            'color' => '#173177'
                        ],
                    'remark' =>
                        [
                            'value' => '您好,remark test success',
                            'color' => '#173177'
                        ],
                ]
        ];
        $json = json_encode($params,JSON_UNESCAPED_UNICODE);
        return $this->curlPost($url, $json);
    }


    /**
     * 通过CURL发送数据
     * @param $url 请求的URL地址
     * @param $data 发送的数据
     * return 请求结果
     */
    protected function curlPost($url,$data=array())
    {
        $ch = curl_init();
        $params[CURLOPT_URL] = $url;    //请求url地址
        $params[CURLOPT_HEADER] = FALSE; //是否返回响应头信息
        $params[CURLOPT_SSL_VERIFYPEER] = false;
        $params[CURLOPT_SSL_VERIFYHOST] = false;
        $params[CURLOPT_RETURNTRANSFER] = true; //是否将结果返回
        $params[CURLOPT_POST] = true;
        $params[CURLOPT_POSTFIELDS] = $data;
        curl_setopt_array($ch, $params); //传入curl参数
        $content = curl_exec($ch); //执行
        curl_close($ch); //关闭连接
        return $content;
    }



}