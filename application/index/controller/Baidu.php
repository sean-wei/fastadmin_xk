<?php

namespace app\index\controller;

use app\common\controller\Frontend;
use fast\Date;
use think\Config;
use think\Db;

class Baidu extends Frontend
{

    protected $noNeedLogin = '*';
    protected $noNeedRight = '*';
    protected $layout = '';

    public function index()
    {
        return $this->view->fetch();
    }

    public function news()
    {
        $newslist = [];
        return jsonp(['newslist' => $newslist, 'new' => count($newslist), 'url' => 'https://www.fastadmin.net?ref=news']);
    }



    public function testJson(){
        $data = [
            'sean' => 'BMW',
            'edc' => 'Bens',
            'MC Hotdog' => 'cadillac'
        ];

        $result = toJson(200,'success', $data);

        return $result;
    }


    /**
     * 百度小程序数据接口test
     * @return string
     */
    public function baiduJson(){
        $data = db('kaisuo_category')
            ->limit(10)
            ->order('updatetime', 'desc')
            ->select();

        foreach ($data as &$item){
            $item['image'] = Config::get('root_address') . $item['image'];
        }

        $result = toJson(200,'success', $data);

        return $result;
    }

    /**
     * 百度小程序数据接口test
     * @return string
     */
    public function mainNews(){
        $data = db('kaisuo_category')
            ->where([
                'category' => 'news',
                'status' => 'normal',
                'deletetime' => null
            ])
            ->limit(5)
            ->order('updatetime', 'desc')
            ->select();

        foreach ($data as &$item){
            $item['image'] = Config::get('root_address') . $item['image'];
        }

        $result = toJson(200,'success', $data);

        return $result;
    }


    /**
     * @param $id 详情id
     * @return string
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     */
    public function detailNews(){

        $id = $this->request->param('id');

        $data = db('kaisuo_category')
            ->where('id',$id)
            ->select();

        $result = toJson(200,'success', $data);

        return $result;
    }


    public function appoint(){
        $name = $this->request->param("name");
        $phone = $this->request->param("phone");
        $date = $this->request->param("date");

        $data = [$name,$phone,$date];

        $bool = Db::name('baidu_register')->insertGetId($data);

        if ($bool){
            $result = toJson(200,'success', null);
            return $result;
        }else{
            $result = toJson(200,'error', null);
            return $result;
        }


    }


    //首页产品列表
    public function mainProduct(){
        $data = db('kaisuo_category')
            ->where([
                'category' => 'product',
                'status' => 'normal',
                'deletetime' => null
            ])
            ->limit(8)
            ->order('updatetime', 'desc')
            ->select();

        foreach ($data as &$item){
            $item['image'] = Config::get('root_address') . $item['image'];
        }

        $result = toJson(200,'success', $data);

        return $result;
    }

    //根据分类获取数据
    public function categoryList(){
        if (isset($_GET['page']) && isset($_GET['cate'])) {
            $page = $_GET['page'];
            $category = $_GET['cate'];

            $myWhere = [];
            if (isset($_GET['smallcate'])){
                $myWhere = ['keywords' => $_GET['smallcate']];
            }

            $data = db('kaisuo_category')
                ->where([
                    'category' => $category,
                    'status' => 'normal',
                    'deletetime' => null
                ])
                ->where($myWhere)
                ->page($page, 5)
                ->order('updatetime', 'desc')
                ->select();
//var_dump($data);exit();
            foreach ($data as &$item) {
                $item['image'] = Config::get('root_address') . $item['image'];
            }

            $result = toJson(200, 'success', $data);

            return $result;
        }
    }



    //内页产品列表
    public function productList(){
        if (isset($_GET['page'])) {
            $page = $_GET['page'];

            $data = db('kaisuo_category')
                ->where([
                    'category' => 'product',
                    'status' => 'normal',
                    'deletetime' => null
                ])
                ->page($page, 5)
                ->order('updatetime', 'desc')
                ->select();
//var_dump($data);exit();
            foreach ($data as &$item) {
                $item['image'] = Config::get('root_address') . $item['image'];
            }

            $result = toJson(200, 'success', $data);

            return $result;
        }
    }


    //产品详情
    public function productDetail(){
        if (isset($_GET['id'])) {
            $id = $_GET['id'];

            $data = db('kaisuo_category')
                ->where(['id' => $id])
                ->select();

            foreach ($data as &$item) {
                $item['image'] = Config::get('root_address') . $item['image'];
//                $item['images'] = Config::get('root_address') . $item['images'];
                $item['updatetime'] = \date("Y-m-d" , $item['updatetime']);
            }
            unset($item);

//            $images = explode(',',$data[0]['images']);
//            $data[0]['images'] = $images;


            $result = toJson(200, 'success', $data);

            return $result;
        }
    }

    //内页资讯列表
    public function newsList(){
        if (isset($_GET['page'])) {
            $page = $_GET['page'];

            $data = db('kaisuo_category')
                ->where([
                    'category' => 'news',
                    'status' => 'normal',
                    'deletetime' => null
                ])
                ->page($page, 8)
                ->order('updatetime', 'desc')
                ->select();
//var_dump($data);exit();
            $count = count($data);
            foreach ($data as $key => &$item) {
                $item['image'] = Config::get('root_address') . $item['image'];
                $tem['updagtetime'] = date('Y-m-s h:i:s' ,$item['updatetime']);

                if ($key != 0){
                    $item['fontId'] = $data[$key - 1]['id'];//上一篇id
                }else{
                    $item['fontId'] = 0;
                }
                if ($key != $count - 1){
                    $item['nextId'] = $data[$key + 1]['id'];//下一篇id
                }else{
                    $item['nextId'] = 0;
                }

            }
            unset($item);

            $result = toJson(200, 'success', $data);

            return $result;
        }
    }

    //资讯详情
    public function newsDetail(){
        if (isset($_GET['id'])) {
            $id = $_GET['id'];

            $data = db('kaisuo_category')
                ->where(['id' => $id])
                ->select();

            foreach ($data as &$item) {
                $item['image'] = Config::get('root_address') . $item['image'];
                $item['updatetime'] = date('Y-m-s h:i:s' ,$item['updatetime']);
            }

//            $images = explode(',',$data[0]['images']);
//            $data[0]['images'] = $images;

            $result = toJson(200, 'success', $data);

            return $result;
        }
    }

    /**
     * 企业相册
     */
    public function companyImage(){
        $myImage = db('kaisuo_banner')
            ->field('images,updatetime')
            ->where([
                'category' => 'all',
                'status' => 'normal'
            ])
            ->order('updatetime', 'desc')
            ->limit(1)
            ->select();

        $myImage = explode(',',$myImage[0]['images']);
        $myImage = Config::get('root_address') . $myImage[0];//我的图库缩略图

        $data = db('kaisuo_category')
            ->field('image,updatetime')
            ->where([
                'category' => 'product',
                'status' => 'normal',
                'deletetime' => null
            ])
            ->limit(1)
            ->order('updatetime', 'desc')
            ->select();

        $productImage = Config::get('root_address') . $data[0]['image'];
        $data = [
            'myImg' =>  $myImage,
            'prodImg' => $productImage
        ];

        $result = toJson(200, 'success', $data);
        return $result;
    }


    /**  企业相册
     *
     *  1、产品图库
     * /index/baidu/productimages?cate=product&page=1
     */
    public function productImages(){
        if (isset($_GET['page'])) {

            $page = $_GET['page'];

            $data = db('kaisuo_category')
                ->field('image,updatetime')
                ->where([
                    'category' => 'product',
                    'status' => 'normal',
                    'deletetime' => null
                ])
                ->page($page, 8)
                ->order('updatetime', 'desc')
                ->select();
//var_dump($data);exit();
            foreach ($data as &$item) {
                $item['image'] = Config::get('root_address') . $item['image'];
            }


            $result = toJson(200, 'success', $data);

            return $result;
        }

    }



    /** 企业相册
     *
     *  2、我的图库
     * /index/baidu/productimages?cate=product&page=1
     */
    public function myImages(){
        if (isset($_GET['page'])) {

            $page = $_GET['page'];

            $data = db('kaisuo_banner')
                ->field('images,updatetime')
                ->where([
                    'category' => 'all',
                    'status' => 'normal'
                ])
                ->page($page, 8)
                ->order('updatetime', 'desc')
                ->select();

            $images = explode(',',$data[0]['images']);

            foreach ($images as &$item) {
                $item = Config::get('root_address') . $item;
            }


            $result = toJson(200, 'success', $images);

            return $result;
        }

    }




    //资讯轮播图
    public function newsBanner(){
        $data = db('kaisuo_banner')
            ->where([
                'category' => 'news'
            ])
            ->order('updatetime','desc')
            ->select();

        $images = explode(',',$data[0]['images']);

        foreach ($images as &$item){
            $item = Config::get('root_address') . $item;
        }
//        var_dump($images);exit();

        $result = toJson(200,'success', $images);

        return $result;
    }


    //首页轮播图
    public function getMainBanners(){
        $banners = db('kaisuo_banner')
            ->where(['status' => 'normal','category' => 'main'])
            ->order('updatetime','desc')
            ->value('images');

        $banners = explode(',', $banners);
        foreach ($banners as &$banner) {
            $banner = Config::get('root_address') . $banner;
        }

        $result = toJson(200,'success', $banners);

        return $result;
    }

    //关于我们-首页
    public function about(){
        $data = db('kaisuo_config')
            ->where(['config_category' => 'about'])
            ->select();


        $result = toJson(200,'success', $data);

        return $result;
    }

    //关于我们-详情
    public function aboutDetail(){
        $data = db('kaisuo_category')
            ->where([
                'category' => 'intro',
                'status' => 'normal',
                'deletetime' => null
            ])
            ->order('updatetime', 'desc')
            ->select();

        foreach ($data as &$item){
            $item['updatetime'] = date('Y-m-d',$item['updatetime']);
        }

        $result = toJson(200,'success', $data);

        return $result;
    }

    //联系我们
    public function contactUs(){
        $data = db('kaisuo_config')
            ->where(['config_category' => 'contact'])
            ->select();

        $result = toJson(200,'success', $data);

        return $result;
    }

    //留言
    public function commentSave(){
        $name = $this->request->param("name");
        $phone = $this->request->param("phone");
        $email = $this->request->param("email");
        $comment = $this->request->param("comment");


        if (!empty($name) && !empty($phone) && !empty($email) && !empty($comment)){
            $data = [
                'name' => $name,
                'phone' => $phone,
                'email' => $email,
                'description' => $comment,
                'createtime' => time(),
            ];

            Db::name('kaisuo_comment')->insert($data);
            $result = toJson(200,'success', $data);
            return $result;
        }

    }



    /**
     * 获取所有目录
     *     nav_list: ['首页', '关于我们', '产品展示', '合作案例', '公司动态', '联系我们', '在线留言'],

     *
     * */
    public function allPages(){
        $pages = [
            ['title' => '首页',    'url' => '/pages/index/index', 'type' => 'switchTab'],
            ['title' => '关于我们', 'url' => '/pages/pages01/pages01', 'type' => 'switchTab'],
            ['title' => '产品展示', 'url' => '/pages/pages08/pages08?cate=product', 'type' => 'switchTab'],
            ['title' => '合作案例', 'url' => '/pages/pages08/pages08?cate=fix', 'type' => 'navigate'],
            ['title' => '公司动态', 'url' => '/pages/pages06/pages06', 'type' => 'navigate'],
            ['title' => '联系我们', 'url' => '/pages/pages04/pages04', 'type' => 'navigate'],
            ['title' => '在线留言', 'url' => '/pages/pages07/pages07', 'type' => 'navigate'],
        ];

        $result = toJson(200,'success', $pages);

        return $result;

    }



}
