import React from 'react';
import './NecessaryContainer.scss';
import {VscDebugStackframeDot} from 'react-icons/vsc';

function NecessaryContainer(props) {

    const {values, handleChange} = props;

    return (
        <div className="necessary-section">
            <div className="desc">필수 정보를 입력해주세요.</div>
            <div className="necessary-input-wrap">
                <label><input type="text" className="id input-box" placeholder="* 아이디 (4~20자)" name="id"
                              value={values.id} onChange={handleChange}/></label>
                <label><input type="password" className="password input-box"
                              placeholder="* 비민번호 (영문+숫자, 8~20자)" name="password" value={values.password}
                              onChange={handleChange}/></label>
                <label><input type="password" className="password2 input-box" placeholder="* 비밀번호 재확인" name="password2"
                              value={values.password2}
                              onChange={handleChange}/></label>
                <div className="email-info-wrap">
                    <div className="email-input-wrap">
                        <label><input type="text" className="email input-box" placeholder="* 이메일 앞자리" name="email"
                                      value={values.email}
                                      onChange={handleChange}/></label>
                        <div>@</div>
                        <label><input type="text" className="email-address input-box" placeholder="* 이메일 뒷자리"
                                      name="emailAddress" value={values.emailAddress} onChange={handleChange}
                        /></label>
                    </div>
                    <label>
                        <select className="select-box input-box">
                            <option value="직접입력">직접입력</option>
                            <option value="gmail.com">gmail.com</option>
                            <option value="naver.com">naver.com</option>
                            <option value="daum.net">daum.net</option>
                            <option value="woowa.com">woowa.com</option>
                        </select>
                    </label>
                </div>
                <label><input type="text" className="name input-box" placeholder="* 이름" name="name" value={values.name} onChange={handleChange}/></label>
                <div className="phone-info-wrap">
                    <label className="phone-number-label"><input type="text" className="input-box"
                                                                 placeholder="* 휴대폰" name="phone" value={values.phone} onChange={handleChange}/></label>
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
    );
}

export default NecessaryContainer;
