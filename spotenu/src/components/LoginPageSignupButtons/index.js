import React from "react";

import { BoxButtons, SignupButtom } from "./style";
import { useHistory } from "react-router-dom";
import { routes } from "../../containers/Router";

const LoginPageSignupButtons = () => {

  let history = useHistory();

  const goTolistenerSignupPage = () => {
    history.push(routes.ListenerSignupPage);
  }

  const goTopremiumListenerSignupPage = () => {
    history.push(routes.PremiumListenerSignupPage)
  }

  const goTobandSignupPage= () => {
    history.push(routes.BandSignupPage)
  }

  return (
    <BoxButtons>
      <SignupButtom
        variant="contained"
        color="default"
        onClick={goTolistenerSignupPage}
      >
        Criar conta gratuita
      </SignupButtom>
      <SignupButtom
        variant="contained"
        color="default"
        onClick={goTopremiumListenerSignupPage}
      >
        Criar conta premium
      </SignupButtom>
      <SignupButtom
        variant="contained"
        color="default"
        onClick={goTobandSignupPage}
      >
        Criar conta para banda
      </SignupButtom>
    </BoxButtons>
  )
}

export default LoginPageSignupButtons;