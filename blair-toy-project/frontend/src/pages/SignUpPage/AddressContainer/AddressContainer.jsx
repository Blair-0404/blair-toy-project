import React from 'react';
import './AddressContainer.scss';

function AddressContainer() {
    return (
        <div className="address-section">
            <div className="checkbox-agree-wrap">
                <div className="checkbox-wrap">
                    <input type="checkbox" className="address-agree" id="address-agree"/>
                    <label htmlFor="address-agree">선택 정보를 입력하시겠어요?</label>
                </div>
                <div className="view-content">내용보기</div>
            </div>
            <div className="address-input-wrap">
                <div className="address-search-info-wrap">
                    <label className="address-number-label"><input type="text" className="input-box"
                                                                   placeholder="우편번호"/></label>
                    <label className="address-search-btn-label"><input type="button"
                                                                       className="address-search-btn input-box"
                                                                       value="주소찾기"/></label>
                </div>
                <label><input type="text" className="main-address input-box" placeholder="주소"/></label>
                <label><input type="text" className="detail-address input-box" placeholder="상세 주소"/></label>

            </div>

        </div>
    );
}

export default AddressContainer;
