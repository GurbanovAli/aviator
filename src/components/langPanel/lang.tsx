import React from 'react'

import { connect } from 'react-redux'
import { setLang } from '../../actions/common'
import { IAppState } from 'store'

import styled from 'styled-components'

const mapStateToProps = (state: IAppState) => ({
    data: state.data,
    lang: state.lang
});

const mapDispatchToProps = (dispatch) => ({
    setLang: (lang: any) => dispatch(setLang(lang))
});

const Lang: React.FC = ({ ...props }: any) => {
    const { data, lang, setLang } = props;

    return (
            <Select onChange={(e)=> setLang(data[e.target.value])}>
                <option value="en">en</option>
                <option value="ru">ru</option>
            </Select>
    )
}

const Select = styled.select`
  width: 4rem;
  height: 30px;
  background: #444;
  color: white;
  padding-left: 5px;
  font-size: 15px;
  border: 1.5px solid #696A66;
  border-radius: 0.2rem;
  margin-left: 10px;

  option {
    color: white;
    background: #444;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 0px 1px 3px;
  }
`;

export default connect(mapStateToProps, mapDispatchToProps)(Lang)
