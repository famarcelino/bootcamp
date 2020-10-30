import ButtonIcon from 'core/components/ButtonIcon';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import AuthCard from '../Card';
import './styles.scss';

type FormData = {
    email: string;
    password: string;
}

const Login = () => {
    const { register, handleSubmit } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
    }

    return (
        <AuthCard title="Login">
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <input
                    name="email"
                    ref={register}
                    type="email"
                    className="form-control input-base margin-bottom-30"
                    placeholder="Email"
                />
                <input
                    name="password"
                    ref={register}
                    type="password"
                    className="form-control input-base"
                    placeholder="Senha"
                />
            </form>
            <Link to="/admin/auth/recover" className="login-link-recover">
                Esqueci a senha?
            </Link>
            <div className="login-submit">
                <ButtonIcon text="logar" />
            </div>
            <div className="text-center">
                <span className="not-registered">Não tem Cadastro?</span>
                <Link to="/admin/auth/register" className="login-link-register">CADASTRAR</Link>
            </div>
        </AuthCard>
    );
}

export default Login;