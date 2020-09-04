import React from 'react';
import './SignUpPage.scss';
import {BsPeopleCircle} from 'react-icons/bs';
import {VscDebugStackframeDot} from 'react-icons/vsc';

function SignUpPage() {
    return (
        <div className="sign-up-page">
            <h1 className="sign-up-title"><BsPeopleCircle/>Sign Up Form</h1>
            <form className="sign-up-form">
                <div className="necessary-section">
                    <div className="desc">필수 정보를 입력해주세요.</div>
                    <div className="necessary-input-wrap">
                        <label><input type="text" className="id input-box" placeholder="* 아이디 (4~20자)"/></label>
                        <label><input type="password" className="password input-box"
                                      placeholder="* 비민번호 (영문+숫자, 8~20자)"/></label>
                        <label><input type="password" className="password-confirm input-box" placeholder="* 비밀번호 재확인"/></label>
                        <div className="email-info-wrap">
                            <div className="email-input-wrap">
                                <label><input type="text" className="email input-box" placeholder="* 이메일 앞자리"/></label>
                                <div>@</div>
                                <label><input type="text" className="email-address input-box" placeholder="* 이메일 뒷자리"/></label>
                            </div>
                            <label>
                                <select className="select-box input-box">
                                    <option value="">이메일을 선택해 주세요</option>
                                    <option value="">gmail.com</option>
                                    <option value="dog">naver.com</option>
                                    <option value="cat">daum.net</option>
                                    <option value="hamster">woowa.com</option>
                                </select>
                            </label>
                        </div>
                        <label><input type="text" className="name input-box" placeholder="* 이름"/></label>
                        <div className="phone-info-wrap">
                            <label className="phone-number-label"><input type="text" className="input-box"
                                                                         placeholder="* 휴대폰"/></label>
                            <label className="phone-auth-btn-label"><input type="button"
                                                                           className="phone-auth-btn input-box"
                                                                           value="인증받기"/></label>
                        </div>
                        <ul className="small-desc">
                            <li><VscDebugStackframeDot/>인증번호 전송은 통신사에 따라 최대 1분까지 소요될 수 있습니다.</li>
                            <li><VscDebugStackframeDot/>인증번호가 도착하지 않을 경우 인증번호 재전송을 눌러주세요.</li>
                        </ul>
                    </div>
                </div>

                <div className="address-section">
                    <div className="checkbox-agree-wrap">
                        <div className="checkbox-wrap">
                            <input type="checkbox" className="address-agree" id="address-agree"/>
                            <label for="address-agree">선택 정보를 입력하시겠어요?</label>
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

                <div className="agree-section">
                    <div className="checkbox-agree-wrap">
                        <div className="checkbox-wrap">
                            <input type="checkbox" className="all-agree" id="all-agree"/>
                            <label for="all-agree" className="all-agree-text">전체 약관에 동의합니다.</label>
                        </div>
                    </div>
                    <div className="necessary-agree-wrap checkbox-agree-wrap">
                        <div className="necessary-agree-checkbox-wrap checkbox-wrap">
                            <input type="checkbox" className="necessary-agree" id="necessary-agree"/>
                            <label for="necessary-agree">필수항목에 동의합니다.</label>
                        </div>
                        <ul className="view-content-wrap">
                        <li className="boss-content view-content">사장님광장 이용약관</li>
                        <li className="view-content">개인정보 수집이용 동의</li>
                        </ul>
                    </div>
                    <div className="checkbox-agree-wrap">
                        <div className="checkbox-wrap">
                            <input type="checkbox" className="ad-agree" id="ad-agree"/>
                            <label for="ad-agree">광고성 정보 수신 동의 (선택)</label>
                        </div>
                    </div>
                    <ul className="small-desc">
                        <li><VscDebugStackframeDot/>인증번호 전송은 통신사에 따라 최대 1분까지 소요될 수 있습니다.</li>
                    </ul>
                </div>

                <button type="submit" className="sign-up-btn">가입완료</button>
            </form>
        </div>
    );
}

export default SignUpPage;
