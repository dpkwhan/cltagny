import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const CountrySelector = (
  <Select
    style={{ width: 150 }}
    showSearch
    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
  >
    <Option value="AF">Afghanistan</Option>
    <Option value="AL">Albania</Option>
    <Option value="DZ">Algeria</Option>
    <Option value="AS">American Samoa</Option>
    <Option value="AD">Andorra</Option>
    <Option value="AO">Angola</Option>
    <Option value="AI">Anguilla</Option>
    <Option value="AG">Antigua</Option>
    <Option value="AR">Argentina</Option>
    <Option value="AM">Armenia</Option>
    <Option value="AW">Aruba</Option>
    <Option value="AU">Australia</Option>
    <Option value="AT">Austria</Option>
    <Option value="AZ">Azerbaijan</Option>
    <Option value="BS">The Bahamas</Option>
    <Option value="BH">Bahrain</Option>
    <Option value="BD">Bangladesh</Option>
    <Option value="BB">Barbados</Option>
    <Option value="BY">Belarus</Option>
    <Option value="BE">Belgium</Option>
    <Option value="BZ">Belize</Option>
    <Option value="BJ">Benin</Option>
    <Option value="BM">Bermuda</Option>
    <Option value="BT">Bhutan</Option>
    <Option value="BO">Bolivia</Option>
    <Option value="BA">Bosnia and Herzegovina</Option>
    <Option value="BW">Botswana</Option>
    <Option value="BR">Brazil</Option>
    <Option value="IO">British Indian Ocean Territory</Option>
    <Option value="BN">Brunei</Option>
    <Option value="BG">Bulgaria</Option>
    <Option value="BF">Burkina Faso</Option>
    <Option value="BI">Burundi</Option>
    <Option value="KH">Cambodia</Option>
    <Option value="CM">Cameroon</Option>
    <Option value="CA">Canada</Option>
    <Option value="CV">Cape Verde</Option>
    <Option value="KY">Cayman Islands</Option>
    <Option value="CF">Central African Republic</Option>
    <Option value="TD">Chad</Option>
    <Option value="CL">Chile</Option>
    <Option value="CN">China</Option>
    <Option value="CO">Colombia</Option>
    <Option value="KM">Comoros</Option>
    <Option value="CG">Republic of the Congo</Option>
    <Option value="CD">Democratic Republic of Congo</Option>
    <Option value="CK">Cook Islands</Option>
    <Option value="CR">Costa Rica</Option>
    <Option value="HR">Croatia</Option>
    <Option value="CU">Cuba</Option>
    <Option value="CY">Cyprus</Option>
    <Option value="CZ">Czech Republic</Option>
    <Option value="DK">Denmark</Option>
    <Option value="DJ">Djibouti</Option>
    <Option value="DM">Dominica</Option>
    <Option value="DO">Dominican Republic</Option>
    <Option value="EC">Ecuador</Option>
    <Option value="EG">Egypt</Option>
    <Option value="SV">El Salvador</Option>
    <Option value="GQ">Equatorial Guinea</Option>
    <Option value="ER">Eritrea</Option>
    <Option value="EE">Estonia</Option>
    <Option value="ET">Ethiopia</Option>
    <Option value="FK">Falkland Islands</Option>
    <Option value="FO">Faroe Islands</Option>
    <Option value="FJ">Fiji</Option>
    <Option value="FI">Finland</Option>
    <Option value="FR">France</Option>
    <Option value="GF">French Guiana</Option>
    <Option value="PF">French Polynesia</Option>
    <Option value="GA">Gabon</Option>
    <Option value="GM">The Gambia</Option>
    <Option value="GE">Georgia</Option>
    <Option value="DE">Germany</Option>
    <Option value="GH">Ghana</Option>
    <Option value="GI">Gibraltar</Option>
    <Option value="GR">Greece</Option>
    <Option value="GL">Greenland</Option>
    <Option value="GD">Grenada</Option>
    <Option value="GP">Guadeloupe</Option>
    <Option value="GU">Guam</Option>
    <Option value="GT">Guatemala</Option>
    <Option value="GN">Guinea</Option>
    <Option value="GW">Guinea-Bissau</Option>
    <Option value="GY">Guyana</Option>
    <Option value="HT">Haiti</Option>
    <Option value="VA">Vatican City</Option>
    <Option value="HN">Honduras</Option>
    <Option value="HK">Hong Kong</Option>
    <Option value="HU">Hungary</Option>
    <Option value="IS">Iceland</Option>
    <Option value="IN">India</Option>
    <Option value="ID">Indonesia</Option>
    <Option value="IR">Iran</Option>
    <Option value="IQ">Iraq</Option>
    <Option value="IE">Ireland</Option>
    <Option value="IL">Israel</Option>
    <Option value="IT">Italy</Option>
    <Option value="JM">Jamaica</Option>
    <Option value="JP">Japan</Option>
    <Option value="JO">Jordan</Option>
    <Option value="KZ">Kazakhstan</Option>
    <Option value="KE">Kenya</Option>
    <Option value="KI">Kiribati</Option>
    <Option value="KR">South Korea</Option>
    <Option value="KW">Kuwait</Option>
    <Option value="KG">Kyrgyzstan</Option>
    <Option value="LA">Laos</Option>
    <Option value="LV">Latvia</Option>
    <Option value="LB">Lebanon</Option>
    <Option value="LS">Lesotho</Option>
    <Option value="LR">Liberia</Option>
    <Option value="LY">Libya</Option>
    <Option value="LI">Liechtenstein</Option>
    <Option value="LT">Lithuania</Option>
    <Option value="LU">Luxembourg</Option>
    <Option value="MO">Macau</Option>
    <Option value="MK">Macedonia</Option>
    <Option value="MG">Madagascar</Option>
    <Option value="MW">Malawi</Option>
    <Option value="MY">Malaysia</Option>
    <Option value="MV">Maldives</Option>
    <Option value="ML">Mali</Option>
    <Option value="MT">Malta</Option>
    <Option value="MH">Marshall Islands</Option>
    <Option value="MQ">Martinique</Option>
    <Option value="MR">Mauritania</Option>
    <Option value="MU">Mauritius</Option>
    <Option value="YT">Mayotte</Option>
    <Option value="MX">Mexico</Option>
    <Option value="FM">Federated States of Micronesia</Option>
    <Option value="MD">Moldova</Option>
    <Option value="MC">Monaco</Option>
    <Option value="MN">Mongolia</Option>
    <Option value="ME">Montenegro</Option>
    <Option value="MS">Montserrat</Option>
    <Option value="MA">Morocco</Option>
    <Option value="MZ">Mozambique</Option>
    <Option value="MM">Burma Myanmar</Option>
    <Option value="NA">Namibia</Option>
    <Option value="NR">Nauru</Option>
    <Option value="NP">Nepal</Option>
    <Option value="NL">Netherlands</Option>
    <Option value="AN">Netherlands Antilles</Option>
    <Option value="NC">New Caledonia</Option>
    <Option value="NZ">New Zealand</Option>
    <Option value="NI">Nicaragua</Option>
    <Option value="NE">Niger</Option>
    <Option value="NG">Nigeria</Option>
    <Option value="NU">Niue</Option>
    <Option value="NF">Norfolk Island</Option>
    <Option value="MP">Northern Mariana Islands</Option>
    <Option value="NO">Norway</Option>
    <Option value="OM">Oman</Option>
    <Option value="PK">Pakistan</Option>
    <Option value="PW">Palau</Option>
    <Option value="PS">Palestine</Option>
    <Option value="PA">Panama</Option>
    <Option value="PG">Papua New Guinea</Option>
    <Option value="PY">Paraguay</Option>
    <Option value="PE">Peru</Option>
    <Option value="PH">Philippines</Option>
    <Option value="PL">Poland</Option>
    <Option value="PT">Portugal</Option>
    <Option value="PR">Puerto Rico</Option>
    <Option value="QA">Qatar</Option>
    <Option value="RE">RÃ©union</Option>
    <Option value="RO">Romania</Option>
    <Option value="RU">Russia</Option>
    <Option value="RW">Rwanda</Option>
    <Option value="SH">Saint Helena</Option>
    <Option value="KN">Saint Kitts and Nevis</Option>
    <Option value="LC">St. Lucia</Option>
    <Option value="MF">Saint Martin</Option>
    <Option value="PM">Saint Pierre and Miquelon</Option>
    <Option value="VC">Saint Vincent and the Grenadines</Option>
    <Option value="WS">Samoa</Option>
    <Option value="SM">San Marino</Option>
    <Option value="ST">SÃ£o TomÃ© and PrÃ­ncipe</Option>
    <Option value="SA">Saudi Arabia</Option>
    <Option value="SN">Senegal</Option>
    <Option value="RS">Serbia</Option>
    <Option value="SC">Seychelles</Option>
    <Option value="SL">Sierra Leone</Option>
    <Option value="SG">Singapore</Option>
    <Option value="SK">Slovakia</Option>
    <Option value="SI">Slovenia</Option>
    <Option value="SB">Solomon Islands</Option>
    <Option value="SO">Somalia</Option>
    <Option value="ZA">South Africa</Option>
    <Option value="ES">Spain</Option>
    <Option value="LK">Sri Lanka</Option>
    <Option value="SD">Sudan</Option>
    <Option value="SR">Suriname</Option>
    <Option value="SZ">Swaziland</Option>
    <Option value="SE">Sweden</Option>
    <Option value="CH">Switzerland</Option>
    <Option value="SY">Syria</Option>
    <Option value="TW">Taiwan</Option>
    <Option value="TJ">Tajikistan</Option>
    <Option value="TZ">Tanzania</Option>
    <Option value="TH">Thailand</Option>
    <Option value="TL">Timor-Leste</Option>
    <Option value="TG">Togo</Option>
    <Option value="TK">Tokelau</Option>
    <Option value="TO">Tonga</Option>
    <Option value="TT">Trinidad and Tobago</Option>
    <Option value="TN">Tunisia</Option>
    <Option value="TR">Turkey</Option>
    <Option value="TM">Turkmenistan</Option>
    <Option value="TC">Turks and Caicos Islands</Option>
    <Option value="TV">Tuvalu</Option>
    <Option value="UG">Uganda</Option>
    <Option value="UA">Ukraine</Option>
    <Option value="AE">United Arab Emirates</Option>
    <Option value="GB">United Kingdom</Option>
    <Option value="US">United States</Option>
    <Option value="UY">Uruguay</Option>
    <Option value="VI">US Virgin Islands</Option>
    <Option value="UZ">Uzbekistan</Option>
    <Option value="VU">Vanuatu</Option>
    <Option value="VE">Venezuela</Option>
    <Option value="VN">Vietnam</Option>
    <Option value="WF">Wallis and Futuna</Option>
    <Option value="YE">Yemen</Option>
    <Option value="ZM">Zambia</Option>
    <Option value="ZW">Zimbabwe</Option>
  </Select>
);

export default CountrySelector;
