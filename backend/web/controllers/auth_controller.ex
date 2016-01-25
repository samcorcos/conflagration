defmodule ConflagrationBackend.AuthController do
  use ConflagrationBackend.Web, :controller
  alias Ueberauth.Strategy.Helpers
  alias ConflagrationBackend.UserFromAuth

  plug :move_body_params
  plug Ueberauth

  def callback(%{ assigns: %{ ueberauth_failure: fails } } = conn, _params) do
    conn
    |> put_status(:unauthorized)
    |> render(ConflagrationBackend.AuthView, "error.json", error: "Not Authenticated")
  end

  def callback(%{ assigns: %{ ueberauth_auth: auth } } = conn, params) do
    case UserFromAuth.find_or_create(auth) do
      {:ok, user} ->
        conn = Guardian.Plug.api_sign_in(conn, user, :token)

        conn
        |> put_status(:created)
        |> render(ConflagrationBackend.AuthView, "show.json", jwt: Guardian.Plug.current_token(conn), username: user.id, id: user.id)
      {:error, reason} ->
        conn
        |> put_flash(:error, reason)
        |> redirect(to: "/")
    end
  end

  def move_body_params(conn, _opts) do
    %Plug.Conn{conn | params: conn.body_params, body_params: %{}}
  end
end
