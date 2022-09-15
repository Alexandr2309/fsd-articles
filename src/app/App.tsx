import React, {Suspense} from 'react';import './styles/index.scss'import {Link, Route, Routes} from "react-router-dom";import {useTheme} from "app/providers/themeProvider";import {classNames} from "shared/lib/classNames/classNames";import {AboutPage} from "pages/AboutPage";import {MainPage} from "pages/MainPage";const App = () => {  const {theme, toggleTheme} = useTheme();  return (    <div className={classNames('App', {}, [theme])}>      <button onClick={toggleTheme}>Toggle Theme</button>      <Link to="/">MainPage</Link>      <Link to="/about">AboutPage</Link>      <Suspense fallback={<div>...Loading</div>}>        <Routes>          <Route path="/about" element={<AboutPage/>}/>          <Route path="/" element={<MainPage/>}/>        </Routes>      </Suspense>    </div>  );};export default App;