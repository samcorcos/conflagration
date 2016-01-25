defmodule ConflagrationBackend.Controllers.AuthControllerTest do
  use ConflagrationBackend.ConnCase
  alias ConflagrationBackend.Repo

  setup do
    conn = conn() |> put_req_header("accept", "application/json")
    {:ok, conn: conn}
  end

  test "log in", %{conn: conn} do
    user_params = %{"username" => "josh", "email" => "josh@example.com", "password" => "password", "password_confirmation" => "password"}

    conn =
      conn
      |> post("/auth/identity/callback", user_params)

    assert %{"data" => %{"id" => _, "username" => "josh", "jwt" => _}} =  json_response(conn, 201)
  end
end
