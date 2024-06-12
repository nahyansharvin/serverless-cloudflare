export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		console.log(request.body)
		console.log(request.headers)
		console.log(request.method)

		if (request.method === 'GET') {
			return Response.json({
				message: "You sent a GET request"
			})
		} else {
			return Response.json({
				message: "You did not send a GET request"
			})
		}
	},
};
