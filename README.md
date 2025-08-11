Cazpian_Web

Development

- Install deps: `npm i`
- Create `.env` in project root with:

```
VITE_SUPABASE_URL=https://qmsbrmpcaeknjhrvfbfl.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtc2JybXBjYWVrbmpocnZmYmZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ4OTI0MzUsImV4cCI6MjA3MDQ2ODQzNX0.NkpQp9Xd7XRJruBt2WXImRVWnleuRlFUxw5veR8QaYE
```

- In Supabase, run `supabase/schema.sql` in the SQL editor to create tables and RLS.