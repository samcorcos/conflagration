ExUnit.start

Mix.Task.run "ecto.create", ~w(-r ConflagrationBackend.Repo --quiet)
Mix.Task.run "ecto.migrate", ~w(-r ConflagrationBackend.Repo --quiet)
Ecto.Adapters.SQL.begin_test_transaction(ConflagrationBackend.Repo)

