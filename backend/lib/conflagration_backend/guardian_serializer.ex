defmodule ConflagrationBackend.GuardianSerializer do
  @behaviour Guardian.Serializer

  alias ConflagrationBackend.Repo

  def for_token(user = %{}), do: { :ok, "User:#{user.id}" }
  def for_token(_), do: { :error, "Unknown resource type" }

  def from_token("User:" <> id), do: { :ok, %{id: id} }
  def from_token(_), do: { :error, "Unknown resource type" }
end
