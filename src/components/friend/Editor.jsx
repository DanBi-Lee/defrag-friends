import React from 'react';
import EditorStyles from './Editor.module.css';

function Editor () {
  return (
    <div className={EditorStyles.inputBox}>
    <form>
        <ul>
            <li>
                <label htmlFor="">카테고리</label>
                <select name="" id="">
                    <option value="">미분류</option>
                    <option value="">만들어놓은</option>
                    <option value="">카테고리 리스트</option>
                </select>
            </li>
            <li>
                <label htmlFor="">이미지</label>
                <input type="file" name="" id=""/>
            </li>
            <li>
                <label htmlFor="">이름</label>
                <input type="text"/>
            </li>
            <li>
                <label htmlFor="">별명</label>
                <input type="text"/>
            </li>
            <li>
                <label htmlFor="">전화번호</label>
                <input type="text"/>
            </li>
            <li>
                <label htmlFor="">이메일</label>
                <input type="text"/>
            </li>
            <li>
                <label htmlFor="">전화번호</label>
                <input type="text"/>
            </li>
            <li>
                <label htmlFor="">인스타그램</label>
                <input type="text"/>
            </li>
        </ul>
    </form>
</div>
  );
}

export default Editor;