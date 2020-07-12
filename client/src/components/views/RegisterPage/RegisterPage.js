<<<<<<< HEAD
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../_actions/user_action";
import { withRouter } from "react-router-dom";
function RegisterPage(props) {
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault(); //page가 refresh 되는 것을 막아줌
    if (Password !== ConfirmPassword) {
      //return을 시켜주므로, 밑에 확인과정으로 진입하지 못함.
      return alert("비밀번호와 비밀번호 확인은 같아야 합니다.");
    }
    let body = {
      email: Email,
      password: Password,
      name: Name,
    };
    dispatch(registerUser(body)).then((response) => {
      if (response.payload.success) {
        props.history.push("/login"); //react에서 페이지를 이동시키는 방식
      } else {
        alert("Failed to sign up");
      }
    });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmitHandler}
      >
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} />
        <label>Name</label>
        <input type="text" value={Name} onChange={onNameHandler} />
        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />
        <label>Confirm Password</label>
        <input
          type="password"
          value={ConfirmPassword}
          onChange={onConfirmPasswordHandler}
        />
        <br />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
=======
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../_actions/user_action';
import { withRouter } from 'react-router-dom';
function RegisterPage(props) {
	const dispatch = useDispatch();

	const [Email, setEmail] = useState('');
	const [Name, setName] = useState('');
	const [Password, setPassword] = useState('');
	const [ConfirmPassword, setConfirmPassword] = useState('');

	const onEmailHandler = (event) => {
		setEmail(event.currentTarget.value);
	};
	const onNameHandler = (event) => {
		setName(event.currentTarget.value);
	};
	const onPasswordHandler = (event) => {
		setPassword(event.currentTarget.value);
	};
	const onConfirmPasswordHandler = (event) => {
		setConfirmPassword(event.currentTarget.value);
	};
	const onSubmitHandler = (event) => {
		event.preventDefault(); //page가 refresh 되는 것을 막아줌
		if (Password !== ConfirmPassword) {
			//return을 시켜주므로, 밑에 확인과정으로 진입하지 못함.
			return alert('비밀번호와 비밀번호 확인은 같아야 합니다.');
		}
		let body = {
			email: Email,
			password: Password,
			name: Name,
		};
		dispatch(registerUser(body)).then((response) => {
			if (response.payload.success) {
				props.history.push('/login'); //react에서 페이지를 이동시키는 방식
			} else {
				alert('Failed to sign up');
			}
		});
	};
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100%',
				height: '100vh',
			}}
		>
			<form
				style={{ display: 'flex', flexDirection: 'column' }}
				onSubmit={onSubmitHandler}
			>
				<label>Email</label>
				<input type="email" value={Email} onChange={onEmailHandler} />
				<label>Name</label>
				<input type="text" value={Name} onChange={onNameHandler} />
				<label>Password</label>
				<input type="password" value={Password} onChange={onPasswordHandler} />
				<label>Confirm Password</label>
				<input
					type="password"
					value={ConfirmPassword}
					onChange={onConfirmPasswordHandler}
				/>
				<br />
				<button type="submit">회원가입</button>
			</form>
		</div>
	);
>>>>>>> 564a7dc95486edd51dfb569a22b43ec25e7e4607
}

export default withRouter(RegisterPage);
