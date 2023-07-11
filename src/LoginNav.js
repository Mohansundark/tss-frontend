import React from 'react'

const LoginNav = () => {
    const handleClick = ()=>{
        navigate('/');
      }
  return (
    <AppBar position="sticky" style={{ top: 0 }}>
    <Toolbar>
      <Typography variant="h6" onClick={handleClick} className={classes.title}>
        Help Desk
      </Typography>
      
    </Toolbar>
  </AppBar>
  )
}

export default LoginNav
