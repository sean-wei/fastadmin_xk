<?php

namespace app\admin\controller\ksconfig;

use app\admin\model\KaisuoContact;
use app\common\controller\Backend;

/**
 * 联系我们
 *
 * @icon fa fa-circle-o
 */
class KsContact extends Backend
{
    
    /**
     * KsContact模型对象
     * @var \app\admin\model\ksconfig\KsContact
     */
    protected $model = null;

    public function _initialize()
    {
        parent::_initialize();
        $this->model = new \app\admin\model\ksconfig\KsContact;
        $this->view->assign("configCategoryList", $this->model->getConfigCategoryList());
    }
    
    /**
     * 默认生成的控制器所继承的父类中有index/add/edit/del/multi五个基础方法、destroy/restore/recyclebin三个回收站方法
     * 因此在当前控制器中可不用编写增删改查的代码,除非需要自己控制这部分逻辑
     * 需要将application/admin/library/traits/Backend.php中对应的方法复制到当前控制器,然后进行修改
     */

    /**
     * 查看
     */
    public function index()
    {
        //设置过滤方法
        $this->request->filter(['strip_tags']);
        if ($this->request->isAjax())
        {
            $model = model('kaisuo_config');
            list($where, $sort, $order, $offset, $limit) = $this->buildparams();

            $total = $model
                ->where($where)
                ->where('config_category', 'contact')
                ->order($sort, $order)
                ->count();

            $list = $model
                ->where($where)
                ->where('config_category', 'contact')
                ->order($sort, $order)
                ->limit($offset, $limit)
                ->select();

            $result = array("total" => $total, "rows" => $list);

            return json($result);
        }

        $contact = db('kaisuo_config')->where(['config_category' => 'contact'])->select();
        $this->assign('contact',$contact[0]);

        return $this->view->fetch();
    }


    /**
     * 更新个人信息
     */
    public function update()
    {
        if ($this->request->isPost())
        {
//            var_dump('test');exit();
            $params = $this->request->post("row/a");
            if ($params)
            {
                $contact = \app\admin\model\ksconfig\KsContact::get(['config_category' => 'contact']);
                $contact->save($params);
                $this->success();
            }
            $this->error();
        }
        return;
    }
    

}
