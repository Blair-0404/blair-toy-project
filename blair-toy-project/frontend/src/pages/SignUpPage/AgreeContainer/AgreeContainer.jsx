import React from 'react';
import './AgreeContainer.scss';
import {VscDebugStackframeDot} from 'react-icons/vsc';

function AgreeContainer() {
    return (

        <div className="agree-section">
            <div className="checkbox-agree-wrap">
                <div className="checkbox-wrap">
                    <input type="checkbox" className="all-agree" id="all-agree"/>
                    <label htmlFor="all-agree" className="all-agree-text">전체 약관에 동의합니다.</label>
                </div>
            </div>
            <div className="necessary-agree-wrap">
                <div className="checkbox-agree-wrap">
                    <div className="necessary-agree-checkbox-wrap checkbox-wrap">
                        <input type="checkbox" className="necessary-agree" id="necessary-agree"/>
                        <label htmlFor="necessary-agree">필수항목에 동의합니다.</label>
                    </div>
                </div>
                <ul className="view-content-wrap">
                    <li className="boss-content view-content">사장님광장 이용약관</li>
                    <li className="view-content">개인정보 수집이용 동의</li>
                </ul>
            </div>
            <div className="checkbox-agree-wrap">
                <div className="checkbox-wrap">
                    <input type="checkbox" className="ad-agree" id="ad-agree"/>
                    <label htmlFor="ad-agree">광고성 정보 수신 동의 (선택)</label>
                </div>
            </div>
            <ul className="small-desc">
                <li><VscDebugStackframeDot/>만 14세 이상 회원만 가입 가능합니다.</li>
                <li className="view-content">내용보기</li>

            </ul>
        </div>
    );
}

export default AgreeContainer;
