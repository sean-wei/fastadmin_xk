<?php

namespace app\admin\model\ksconfig;

use think\Model;


class KsAbout extends Model
{

    

    //数据库
    protected $connection = 'database';
    // 表名
    protected $name = 'kaisuo_config';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = 'int';

    // 定义时间戳字段名
    protected $createTime = 'createtime';
    protected $updateTime = 'updatetime';
    protected $deleteTime = false;

    // 追加属性
    protected $append = [
        'config_category_text'
    ];
    

    
    public function getConfigCategoryList()
    {
        return ['mbanners' => __('Config_category mbanners'), 'about' => __('Config_category about'), 'contact' => __('Config_category contact'), 'comment' => __('Config_category comment')];
    }


    public function getConfigCategoryTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['config_category']) ? $data['config_category'] : '');
        $list = $this->getConfigCategoryList();
        return isset($list[$value]) ? $list[$value] : '';
    }




}
