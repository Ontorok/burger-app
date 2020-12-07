import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../_Aux/_Aux'

const withErrorHandler = (WrppedComponent, axios) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                error: null
            }
        }
        // state = {
        //     error: null
        // }
        componentDidMount() {
            this.requestInterceptor = axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            });

            this.responseInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error });
            });
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.requestInterceptor);
            axios.interceptors.response.eject(this.responseInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({ error: null });
        }
        render() {
            return (
                <Aux>
                    <Modal
                        show={this.state.error}
                        closed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrppedComponent {...this.props} />
                </Aux>
            );
        }
    }
}

export default withErrorHandler;