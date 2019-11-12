<?php

namespace app\admin\model\ksconfig;

use think\Model;


class KsBanner extends Model
{

    

    //数据库
    protected $connection = 'database';
    // 表名
    protected $name = 'kaisuo_banner';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = 'int';

    // 定义时间戳字段名
    protected $createTime = 'createtime';
    protected $updateTime = 'updatetime';
    protected $deleteTime = false;

    // 追加属性
    protected $append = [
        'status_text',
        'category_text'
    ];
    

    protected static function init()
    {
        self::afterInsert(function ($row) {
            $pk = $row->getPk();
            $row->getQuery()->where($pk, $row[$pk])->update(['weigh' => $row[$pk]]);
        });
    }

    
    public function getStatusList()
    {
        return ['normal' => __('Normal'), 'hidden' => __('Hidden')];
    }

    public function getCategoryList()
    {
        return ['main' => __('Category main'), 'contact' => __('Category contact'), 'news' => __('Category news'), 'all' => __('Category all')];
    }


    public function getStatusTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['status']) ? $data['status'] : '');
        $list = $this->getStatusList();
        return isset($list[$value]) ? $list[$value] : '';
    }


    public function getCategoryTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['category']) ? $data['category'] : '');
        $list = $this->getCategoryList();
        return isset($list[$value]) ? $list[$value] : '';
    }




}
