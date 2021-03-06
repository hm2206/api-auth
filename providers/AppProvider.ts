import { ApplicationContract } from '@ioc:Adonis/Core/Application'

export default class AppProvider {
  constructor (protected app: ApplicationContract) {
  }

  public register () {
    // Register your own bindings
  }

  public async boot () {
    // IoC container is ready
    const { DatabaseQueryBuilder, ModelQueryBuilder } = this.app.container.use('Adonis/Lucid/Database')

    DatabaseQueryBuilder.macro('getCount', async function () {
      const result = await this.count('* as count')
      return Number(result[0].count)
    })

    ModelQueryBuilder.macro('getCount', async function () {
      const result = await this.count('* as count')
      return Number(result[0].count)
    })

    ModelQueryBuilder.macro('getSum', async function (column: string) {
      const result = await this.sum(`${column} as count`)
      return Number(result[0].count)
    })
    
  }

  public async ready () {
    // App is ready
  }

  public async shutdown () {
    // Cleanup, since app is going down
  }
}
