import "reflect-metadata";

import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import { MeResolver } from "../../apollo/resolvers";
import { buildSchema } from "type-graphql";
import { NextRequest } from "next/server";

// Construye el esquema de TypeGraphQL
const schema = await buildSchema({
  resolvers: [MeResolver],
});

// Configura Apollo Server
const apolloServer = new ApolloServer({
  schema,
  plugins: [ApolloServerPluginLandingPageLocalDefault()],
  introspection: true,
});

// Crea el manejador de Apollo Server
// Crea el manejador de Apollo Server
const handler = startServerAndCreateNextHandler(apolloServer, {
  context: async (req: NextRequest) => ({ req }),
});


// Exporta las funciones GET y POST con la firma correcta
export async function GET(request: NextRequest, context: { params: any }) {
  return handler(request);
}

export async function POST(request: NextRequest, context: { params: any }) {
  return handler(request);
}
