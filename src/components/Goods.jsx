import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { changeVal } from '../store/dic';

const Goods = () => {
  const dispatch = useDispatch();
  // 使用state中的数据
  const sortList = useSelector((state) => state.dic.sortList);

  useEffect(() => {
    // 触发store中action以更新数据
    dispatch(
      changeVal([
        { label: '家具类', value: '家具类' },
        { label: '食品类', value: '食品类' },
      ])
    );
  }, [dispatch]);

  return (
    <div>
      渲染数据：
      <ul>
        {sortList.map((el) => (
          <li key={el.value}>{el.label}</li>
        ))}
      </ul>
    </div>
  );
};

export default Goods;
