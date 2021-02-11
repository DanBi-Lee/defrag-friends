import React, { useRef, useState } from 'react';
import lnbStyles from './Lnb.module.css';

function Lnb ({friendList, categoryList, name, addCategory, setSelectState, selectState, removeCategory}) {
  const [activateInput, setActivateInput] = useState(false);
  const btn = useRef();
  const caterogyInput = useRef();

  const handlingButton = event => {
    event.preventDefault();
    if(!activateInput){
      setActivateInput(()=>true);
      btn.current.style.width = '42px';
    }else{
      const {value} = caterogyInput.current
      if(!value){
        return;
      }
      const category = {
        name : value
      }
      addCategory(category);
      caterogyInput.current.value = '';
    }
  }

  const selectCategory = (category) => {
    const { id : categoryId, name : categoryName,  isSelect} = category;
    const categoryState = {
      categoryId,
      categoryName,
      isSelect: isSelect === undefined ? true : false
    }
    setSelectState({...selectState, ...categoryState});
  }

  return (
    <nav className={lnbStyles.lnb}>
    <p className={lnbStyles.welcomeMessage}>{name}님, 환영합니다.</p>
    <button className={lnbStyles.btn}>
        <i className="fas fa-plus"></i> 새 친구 등록
    </button>
    <p>
      <button onClick={()=>selectCategory({isSelect: false})}>전체 친구 ({friendList.length}명)</button>
    </p>
    <ul>
      <li>
        <button onClick={()=>selectCategory({id: '', name: '미분류'})}>미분류</button>
      </li>
      {
        categoryList.map(category=>{
          return (
          <li key={category.id}>
            <button onClick={()=>selectCategory(category)}>{category.name}</button>
            <button className={lnbStyles.delete} onClick={()=>removeCategory(category.id)} title="삭제">
              <i className="far fa-trash-alt"></i>
              <span className="hidden">
                삭제
              </span>
            </button>
          </li>
          );
      })
      }
    </ul>
    <form className={lnbStyles.categoryForm} >
      <input type="text" placeholder="추가할 카테고리명" ref={caterogyInput} />
      <button className={lnbStyles.btn} ref={btn} onClick={handlingButton}>
        <i className="fas fa-plus"></i> {activateInput? '' : '카테고리 추가'}
      </button>
    </form>

</nav>
  );
}

export default Lnb;