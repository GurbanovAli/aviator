import React from 'react'

import { connect } from 'react-redux'
import { setLang } from 'actions'
import { IAppState, IAppDispatch } from 'store'

import { Select } from './style'

const mapStateToProps = (state: IAppState) => ({
    data: state.data,
    lang: state.lang
});

const mapDispatchToProps = (dispatch: IAppDispatch) => ({
    setLang: (lang: any) => dispatch(setLang(lang))
});

const Lang: React.FC<IAppState | IAppDispatch> = ({ ...props }: IAppState | IAppDispatch) => {
    const { data, lang, setLang } = props;

    return (
        <Select onChange={(e) => setLang(data[e.target.value])}>
            <option value="en">en</option>
            <option value="ru">ru</option>
        </Select>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Lang)
