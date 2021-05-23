import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: 'us-east-1_Dg3O0yL3I',
    ClientId: '4f8idnp10mugeqiveobnfgp6d'
  };


export default new CognitoUserPool(poolData);