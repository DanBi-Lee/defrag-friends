import React, { useEffect, useMemo, useState } from 'react';
import DataService from '../../service/data_service';
import EditorStyles from './Editor.module.css';

function Editor ({friendInfo, setFriendInfo, setImgData, user}) {
    const [categoryList, setCategoryList] = useState([]);
    const dataService = useMemo(()=>new DataService(), []);

    const handlingEditor = event => {
        const {id : key } = event.target;
        const {value} = event.target;
        setFriendInfo( {...friendInfo, [key]: value});
    };

    const handlingThumb = event => {
        const {id : key } = event.target;
        const reader = new FileReader();
        reader.addEventListener("load", function(e){
            setFriendInfo( {...friendInfo, [key]: e.target.result});
        }, false);
        reader.readAsDataURL(event.target.files[0]);

        const formData = new FormData();
        formData.append("file", event.target.files[0]);
        formData.append("upload_preset", "defrag-friend");
        setImgData(()=>formData);
    };

    useEffect(()=>{
        if(user){
            const unscribeCategoryList = dataService.getCategoryList(user, (list)=>{
                const categoryList = list.map(category=>{
                  return {
                    ...category.data(), id : category.id
                  }
                });
                setCategoryList(()=>categoryList);
              });
            
            return ()=>{
                unscribeCategoryList();
            }
        }
    }, [user, setCategoryList, dataService]);

  return (
    <div className={EditorStyles.inputBox}>
    <form>
        <ul>
            <li>
                <label htmlFor="category">카테고리</label>
                <select name="category" id="category" onChange={handlingEditor} >
                    <option value="미분류">미분류</option>
                    {
                        categoryList.map(category=><option key={category.id} value={category.id}>{category.name}</option>)
                    }
                </select>
            </li>
            <li>
                <label htmlFor="thumb">이미지</label>
                <input id="thumb" type="file" name="thumb" onChange={handlingThumb} />
            </li>
            <li>
                <label htmlFor="name">이름</label>
                <input id="name" type="text" onChange={handlingEditor} value={friendInfo.name} />
            </li>
            <li>
                <label htmlFor="nickname">별명</label>
                <input id="nickname" type="text" onChange={handlingEditor} value={friendInfo.nickname} />
            </li>
            <li>
                <label htmlFor="birthday">생일</label>
                <input id="birthday" type="date" onChange={handlingEditor} value={friendInfo.birthday} />
            </li>
            <li>
                <label htmlFor="tel">전화번호</label>
                <input id="tel" type="text" onChange={handlingEditor} value={friendInfo.tel} />
            </li>
            <li>
                <label htmlFor="email">이메일</label>
                <input id="email" type="text" onChange={handlingEditor} value={friendInfo.email} />
            </li>
            <li>
                <label htmlFor="instagram">인스타그램</label>
                <input id="instagram" type="text" onChange={handlingEditor} value={friendInfo.instagram} />
            </li>
            <li>
                <label htmlFor="kakaotalk">카카오톡</label>
                <input id="kakaotalk" type="text" onChange={handlingEditor} value={friendInfo.kakaotalk} />
            </li>
            <li>
                <label htmlFor="twitter">트위터</label>
                <input id="twitter" type="text" onChange={handlingEditor} value={friendInfo.twitter} />
            </li>
            <li>
                <label htmlFor="facebook">페이스북</label>
                <input id="facebook" type="text" onChange={handlingEditor} value={friendInfo.facebook} />
            </li>
            <li>
                <label htmlFor="memo">메모</label>
                <textarea name="memo" id="memo" cols="30" rows="10" onChange={handlingEditor} value={friendInfo.memo} >
                </textarea>
            </li>
        </ul>
    </form>
</div>
  );
}

export default Editor;