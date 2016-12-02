import CurrencyType from '../types/currency'
import currencyResolver from '../resolvers/currency'
import { GraphQLList } from 'graphql'

export default {
  type: new GraphQLList(CurrencyType),
  resolve: currencyResolver,
  description: 'Fetches all the currencies'
}
