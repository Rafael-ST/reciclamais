class CustomCorsMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response
        # One-time configuration and initialization.

    def __call__(self, request):
        # Code to be executed for each request before
        # the view (and later middleware) are called.
        response = self.get_response(request)
        response["Access-Control-Allow-Headers"] = [
                "Authorization",
                "Access-Control-Request-Method",
                "Access-Control-Request-Headers",
                "Origin",
                "user_key",
                "Accept",
                "Content-Type"
            ]
        '''response["Access-Control-Allow-Headers"] = "Authorization, Access-Control-Request-Method, Access-Control-Request-Headers, Origin, user_key, Accept, Content-Type"'''

        response["Access-Control-Allow-Origin"] = [
            "localhost:8081",
            "localhost:8080",
            "https://dev-reciclamais.fortaleza.ce.gov.br",
            "https://reciclamais.fortaleza.ce.gov.br"
            ]
        response["Access-Control-Allow-Methods"] = [
            "GET",
            "HEAD",
            "POST",
            "PUT",
            "DELETE",
            "PATCH",
            "TRACE",
            "CONNECT",
            "OPTIONS"
        ]
        #response["Access-Control-Allow-Methods"] = "GET, HEAD, POST, PUT, DELETE, PATCH, TRACE, CONNECT, OPTIONS"

        # Code to be executed for each request/response after
        # the view is called.

        return response