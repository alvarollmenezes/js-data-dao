import {getEnv} from './utils'
import { DatabaseConfig } from './database-config'
import { MailConfig } from './mail-config'
/**
 * This class have all application config
 * If necessary add more configuration, please inherit the class and add more config
 */
export class AppConfig {
  public mailConfig: MailConfig
  public dbConfig: DatabaseConfig
  private mainCompany: string
  private isProd: boolean
  private cryptoAlgorithm: string
  private cryptoPassword: string
  private expirationDays: number
  private jwtConfig: any
  private usersTable: string
  private signUpUrl: string
  private forgotUrl: string

  private corsAllowed: string
  private corsAllowMethods: string
  private corsAllowHeaders: string

  constructor () {
    this.corsAllowed = getEnv('CORSALLOWED') || '*'
    this.corsAllowMethods = getEnv('CORS_ALLOW_METHODS') || 'GET,PUT,POST,DELETE,OPTIONS,PATCH'
    this.corsAllowHeaders = getEnv('CORS_ALLOW_HEADERS') || 'Origin, X-Requested-With, Content-Type, Accept, Authorization, If-Modified-Since, Cache-Control, enctype, Pragma'
    this.mainCompany = getEnv('MAIN_COMPANY')
    this.isProd = ( getEnv('NODE_ENV') === 'production' )
    this.cryptoAlgorithm = getEnv('CRYPTO_ALGORITHM') || 'aes192'
    this.cryptoPassword = getEnv('CRYPTO_PASSWORD')
    this.expirationDays = Number.parseInt( getEnv('EXPIRATION_DAYS'), 10 ) || 3
    this.usersTable = getEnv('USERS_TABLE') || 'users'
    this.signUpUrl = getEnv('SIGNUP_URL') || 'http://foo.bar/auth/signup'
    this.forgotUrl = getEnv('FORGOT_URL') || 'http://foo.bar/auth/forgot'
    this.jwtConfig = {
      strategy: 'jwt',
      secret: getEnv('APP_JWT_SECRET'),
      session: { session: ( getEnv('APP_JWT_SESSION') || false as boolean ) }
    }
    this.mailConfig = new MailConfig()
    this.dbConfig = new DatabaseConfig()

  }

  getMainCompany (): string {
    return this.mainCompany
  }

  getIsProd (): boolean {
    return this.isProd
  }

  getCryptoAlgorithm (): string {
    return this.cryptoAlgorithm
  }

  getCryptoPassword (): string {
    return this.cryptoPassword
  }

  getExpirationDays (): number {
    return this.expirationDays
  }

  getUsersTable (): string {
    return this.usersTable
  }

  getJwtConfig (): any {
    return this.jwtConfig
  }

  getSignUpUrl (): string {
    return this.signUpUrl
  }

  getForgotUrl (): string {
    return this.forgotUrl
  }

  getCorsAllowed (): string {
    return this.corsAllowed
  }
  getCorsAllowMethods (): string {
    return this.corsAllowMethods
  }

  getCorsAllowHeaders (): string {
    return this.corsAllowHeaders
  }

}
