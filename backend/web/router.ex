defmodule ConflagrationBackend.Router do
  use ConflagrationBackend.Web, :router
  require Ueberauth

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", ConflagrationBackend do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
  end

  scope "/auth", ConflagrationBackend do
    pipe_through :api

    get "/:provider", AuthController, :request
    get "/:provider/callback", AuthController, :callback
    post "/identity/callback", AuthController, :callback
  end

  # Other scopes may use custom stacks.
  # scope "/api", ConflagrationBackend do
  #   pipe_through :api
  # end
end
