import * as React from 'react'
import * as m from 'react-materialize'
import SearchResults from './SearchResults'

import './application.css'

export default class Application extends React.Component<any, { searchValue: string }> {
    constructor(props: any) {
        super(props)
        this.state = {
            searchValue: ''
        }
    }

    public render() {
        return (
            <div>
                <m.Row>
                    <m.Col s={12}>
                        <m.Input placeholder='filter...' onChange={this.onChangeSearch} />
                    </m.Col>
                </m.Row>
                <m.Row>
                    <m.Col s={12}>
                        <SearchResults search={this.state.searchValue} />
                    </m.Col>
                </m.Row>
            </div>
        )
    }

    private onChangeSearch = (_: any, searchValue: string) => {
        this.setState({ searchValue })
    }
}