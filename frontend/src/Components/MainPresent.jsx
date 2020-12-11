import { Link, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme)=>({
    stroke:{
        margin:theme.spacing(4)
    },
    api:{
        margin:theme.spacing(4),
        marginLeft:theme.spacing(9)
    }
}))
const Main = () => {
   const classes = useStyles()
    return <>
        <Typography className = {classes.stroke} variant = 'h6'>Проект сделан по <Link href = 'https://clck.ru/ND6xC'>техническому заданию</Link> для кампании TakeoffStaff </Typography>
        <Typography className = {classes.stroke} variant = 'h6'>На фронтенде применены:</Typography>
        <Typography className = {classes.api} variant = 'h6'>React</Typography>
        <Typography className = {classes.api} variant = 'h6'>Material UI</Typography>
        <Typography className = {classes.api} variant = 'h6'>Apollo Client</Typography>
        <Typography className = {classes.stroke} variant = 'h6'>На бэкенде:</Typography>
        <Typography className = {classes.api} variant = 'h6'>GraphQL</Typography>
        <Typography className = {classes.api} variant = 'h6'>MongoDB</Typography>
        <Typography className = {classes.api} variant = 'h6'>ApolloServer</Typography>

        <Typography variant = 'h6' className = {classes.stroke}>Здесь происходит следующее:</Typography>
        <Typography variant = 'h6' className = {classes.stroke}>Во время авторизации клиент связывается с сервером и сверяет введенный логин с логином и паролемю 
        На сервере в резолвере стоит заглушка с простым логином и паролем. В БД они не записаны, но, тем не менее сверка происходит на сервере</Typography>
        <Typography variant = 'h6' className = {classes.stroke}>Логин/Пароль: admin/admin</Typography>
        <Typography variant = 'h6' className = {classes.stroke}>Если авторизация прошла успешно, вас сразу перекидывает на страницу контактов</Typography>
        <Typography variant = 'h6' className = {classes.stroke}>На стр контактов вы можете Добавлять/Изменять/Удалять и искать контакты. Все эти данные
        хранятся в БД и манипуляции с ними - это манипуляции с БД. Все это происходит при помощи Apollo, благодаря HTTP запросам. ВебСокетов здесь нет. 
        Поиск ведется внутри самой БД с помощью регулярного выражения</Typography>

        <Typography className = {classes.stroke} variant = 'h6'> В этом проекте я хотел показать, что обладаю знаниями fullStack разработчика, так что я немного отклонился от ТЗ и
        сделал функционал Добавить/Изменить/Удалить работающим не с мок сервисом, а с реальной NoSQL базой данных </Typography>
        <Typography className = {classes.stroke} variant = 'h6'>Мой старый frontend проект, работающий с мок сервисом, с использованием React + Redux можете посмотреть
         по <Link href = "https://kaluga-project.herokuapp.com/">ссылке на heroku</Link> и <Link href = "https://github.com/Nawarius/Kaluga-Project">ссылке на GitHub</Link></Typography>


        

    </>
}

export default Main