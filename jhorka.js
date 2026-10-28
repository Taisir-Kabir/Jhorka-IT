const supabaseClient = null;
const IMG = { "about": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0ODAgMzYwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMwQjFGM0EiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyNTYzRUIiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNDgwIiBoZWlnaHQ9IjM2MCIgcng9IjIwIiBmaWxsPSJ1cmwoI2cpIi8+PHJlY3QgeD0iNTAiIHk9IjQwIiB3aWR0aD0iMzgwIiBoZWlnaHQ9IjE2MCIgcng9IjEyIiBmaWxsPSIjZmZmIi8+PGcgZmlsbD0iIzA2QjZENCI+PHJlY3QgeD0iODAiIHk9IjEzMCIgd2lkdGg9IjM0IiBoZWlnaHQ9IjUwIiByeD0iNSIvPjxyZWN0IHg9IjEzMCIgeT0iMTAwIiB3aWR0aD0iMzQiIGhlaWdodD0iODAiIHJ4PSI1Ii8+PHJlY3QgeD0iMTgwIiB5PSI3MCIgd2lkdGg9IjM0IiBoZWlnaHQ9IjExMCIgcng9IjUiLz48L2c+PHBhdGggZD0iTTI1MCA4MGgxNTBNMjUwIDEwNWgxMTBNMjUwIDEzMGgxMzAiIHN0cm9rZT0iI2NiZDVlMSIgc3Ryb2tlLXdpZHRoPSI4IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48ZyBmaWxsPSIjZmZmIj48Y2lyY2xlIGN4PSIxMjAiIGN5PSIyNjUiIHI9IjI4Ii8+PGNpcmNsZSBjeD0iMjQwIiBjeT0iMjY1IiByPSIyOCIvPjxjaXJjbGUgY3g9IjM2MCIgY3k9IjI2NSIgcj0iMjgiLz48cGF0aCBkPSJNNzAgMzQwYzAtNDAgMjItNTIgNTAtNTJzNTAgMTIgNTAgNTJ6TTE5MCAzNDBjMC00MCAyMi01MiA1MC01MnM1MCAxMiA1MCA1MnpNMzEwIDM0MGMwLTQwIDIyLTUyIDUwLTUyczUwIDEyIDUwIDUyeiIvPjwvZz48L3N2Zz4=", "hero": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MjAgNDAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImIiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMyNTYzRUIiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwNkI2RDQiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KPGNpcmNsZSBjeD0iMjcwIiBjeT0iMjAwIiByPSIxNzAiIGZpbGw9InVybCgjYikiIG9wYWNpdHk9Ii4yNSIvPjxjaXJjbGUgY3g9IjI3MCIgY3k9IjIwMCIgcj0iMTIwIiBmaWxsPSJ1cmwoI2IpIiBvcGFjaXR5PSIuMjUiLz4KPHJlY3QgeD0iMTIwIiB5PSI5MCIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIxOTAiIHJ4PSIxNCIgZmlsbD0iIzBhMTczMCIgc3Ryb2tlPSIjMDZCNkQ0IiBzdHJva2Utd2lkdGg9IjMiLz4KPGNpcmNsZSBjeD0iMTQwIiBjeT0iMTA4IiByPSI1IiBmaWxsPSIjZjg3MTcxIi8+PGNpcmNsZSBjeD0iMTU2IiBjeT0iMTA4IiByPSI1IiBmaWxsPSIjZmJiZjI0Ii8+PGNpcmNsZSBjeD0iMTcyIiBjeT0iMTA4IiByPSI1IiBmaWxsPSIjMzRkMzk5Ii8+CjxnIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSI3Ij48cGF0aCBkPSJNMTQ1IDE0MGg3MCIgc3Ryb2tlPSIjMDZCNkQ0Ii8+PHBhdGggZD0iTTE2NSAxNjBoMTEwIiBzdHJva2U9IiNmZmYiLz48cGF0aCBkPSJNMTY1IDE4MGg2MCIgc3Ryb2tlPSIjMjU2M0VCIi8+PHBhdGggZD0iTTE2NSAyMDBoOTAiIHN0cm9rZT0iI2ZmZiIvPjxwYXRoIGQ9Ik0xNDUgMjIwaDUwIiBzdHJva2U9IiMwNkI2RDQiLz48cGF0aCBkPSJNMTQ1IDI0MGgxMzAiIHN0cm9rZT0iIzI1NjNFQiIgb3BhY2l0eT0iLjciLz48L2c+CjxwYXRoIGQ9Ik05MCAyODBoMzYwbC0zMCAyNkgxMjB6IiBmaWxsPSIjZGJlN2ZmIi8+PHJlY3QgeD0iMjMwIiB5PSIyODYiIHdpZHRoPSI4MCIgaGVpZ2h0PSI2IiByeD0iMyIgZmlsbD0iIzk0YTNiOCIvPgo8Zz48cmVjdCB4PSIzOTAiIHk9IjYwIiB3aWR0aD0iOTAiIGhlaWdodD0iNjAiIHJ4PSIxNCIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik00MzUgNzVsMjIgOHYxNGMwIDEyLTEwIDIwLTIyIDI0LTEyLTQtMjItMTItMjItMjRWODN6IiBmaWxsPSIjMjU2M0VCIi8+PHBhdGggZD0iTTQyNiA5OGw3IDcgMTItMTQiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBmaWxsPSJub25lIi8+PC9nPgo8Zz48cmVjdCB4PSI0MCIgeT0iMjE1IiB3aWR0aD0iODYiIGhlaWdodD0iNjQiIHJ4PSIxNCIgZmlsbD0iI2ZmZiIvPjxlbGxpcHNlIGN4PSI4MyIgY3k9IjIzNiIgcng9IjIwIiByeT0iNyIgZmlsbD0iIzA2QjZENCIvPjxwYXRoIGQ9Ik02MyAyMzZ2MjJjMCA0IDkgOCAyMCA4czIwLTQgMjAtOHYtMjIiIGZpbGw9IiMyNTYzRUIiLz48L2c+CjxnPjxyZWN0IHg9IjQwMCIgeT0iMjUwIiB3aWR0aD0iODAiIGhlaWdodD0iNjAiIHJ4PSIxNCIgZmlsbD0iI2ZmZiIvPjx0ZXh0IHg9IjQ0MCIgeT0iMjg5IiBmb250LWZhbWlseT0ibW9ub3NwYWNlIiBmb250LXNpemU9IjI2IiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSIjMEIxRjNBIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4mbHQ7LyZndDs8L3RleHQ+PC9nPgo8Y2lyY2xlIGN4PSI2MCIgY3k9IjEyMCIgcj0iOCIgZmlsbD0iIzA2QjZENCIvPjxjaXJjbGUgY3g9IjQ3MCIgY3k9IjE5MCIgcj0iNiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==", "logo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMjU2M0VCIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDZCNkQ0Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTYiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIzMiIgeT0iNDUiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIiBmb250LXNpemU9IjM4IiBmb250LXdlaWdodD0iODAwIiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5KPC90ZXh0Pjwvc3ZnPg==", "courses/career": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMzYwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMwNkI2RDQiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyNTYzRUIiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNjQwIiBoZWlnaHQ9IjM2MCIgZmlsbD0idXJsKCNnKSIvPjxnIGZpbGw9IiNmZmYiIG9wYWNpdHk9Ii4xMiI+PGNpcmNsZSBjeD0iNzAiIGN5PSI3MCIgcj0iNjAiLz48Y2lyY2xlIGN4PSI1OTAiIGN5PSIzMTAiIHI9IjkwIi8+PC9nPjxyZWN0IHg9IjI0MCIgeT0iMTMwIiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjExMCIgcng9IjE0IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTI5MCAxMzB2LTE2YTEwIDEwIDAgMDExMC0xMGg0MGExMCAxMCAwIDAxMTAgMTB2MTYiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxMCIgZmlsbD0ibm9uZSIvPjxyZWN0IHg9IjI0MCIgeT0iMTcwIiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMDZCNkQ0Ii8+PHJlY3QgeD0iMzA1IiB5PSIxNjUiIHdpZHRoPSIzMCIgaGVpZ2h0PSIyMiIgcng9IjUiIGZpbGw9IiMyNTYzRUIiLz48L3N2Zz4=", "courses/cyber": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMzYwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMxMjNhN2EiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyNTYzRUIiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNjQwIiBoZWlnaHQ9IjM2MCIgZmlsbD0idXJsKCNnKSIvPjxnIGZpbGw9IiNmZmYiIG9wYWNpdHk9Ii4xMiI+PGNpcmNsZSBjeD0iNzAiIGN5PSI3MCIgcj0iNjAiLz48Y2lyY2xlIGN4PSI1OTAiIGN5PSIzMTAiIHI9IjkwIi8+PC9nPjxwYXRoIGQ9Ik0zMjAgOTBsODUgMzB2NTVjMCA1MC0zNiA4MC04NSA5NS00OS0xNS04NS00NS04NS05NXYtNTV6IiBmaWxsPSIjZmZmIi8+PHJlY3QgeD0iMjk1IiB5PSIxNjAiIHdpZHRoPSI1MCIgaGVpZ2h0PSI0MCIgcng9IjgiIGZpbGw9IiMyNTYzRUIiLz48cGF0aCBkPSJNMzAzIDE2MHYtMTJhMTcgMTcgMCAwMTM0IDB2MTIiIHN0cm9rZT0iIzI1NjNFQiIgc3Ryb2tlLXdpZHRoPSI3IiBmaWxsPSJub25lIi8+PC9zdmc+", "courses/data": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMzYwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMyNTYzRUIiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwQjFGM0EiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNjQwIiBoZWlnaHQ9IjM2MCIgZmlsbD0idXJsKCNnKSIvPjxnIGZpbGw9IiNmZmYiIG9wYWNpdHk9Ii4xMiI+PGNpcmNsZSBjeD0iNzAiIGN5PSI3MCIgcj0iNjAiLz48Y2lyY2xlIGN4PSI1OTAiIGN5PSIzMTAiIHI9IjkwIi8+PC9nPjxnIGZpbGw9IiNmZmYiPjxyZWN0IHg9IjI0MCIgeT0iMTcwIiB3aWR0aD0iMzYiIGhlaWdodD0iNzAiIHJ4PSI2Ii8+PHJlY3QgeD0iMjkyIiB5PSIxMzAiIHdpZHRoPSIzNiIgaGVpZ2h0PSIxMTAiIHJ4PSI2Ii8+PHJlY3QgeD0iMzQ0IiB5PSI5NSIgd2lkdGg9IjM2IiBoZWlnaHQ9IjE0NSIgcng9IjYiLz48L2c+PHBhdGggZD0iTTIzNiAxNTBsNjAtNDAgNTAtMzAiIHN0cm9rZT0iIzA2QjZENCIgc3Ryb2tlLXdpZHRoPSI2IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L3N2Zz4=", "courses/db": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMzYwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMwQjFGM0EiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwNkI2RDQiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNjQwIiBoZWlnaHQ9IjM2MCIgZmlsbD0idXJsKCNnKSIvPjxnIGZpbGw9IiNmZmYiIG9wYWNpdHk9Ii4xMiI+PGNpcmNsZSBjeD0iNzAiIGN5PSI3MCIgcj0iNjAiLz48Y2lyY2xlIGN4PSI1OTAiIGN5PSIzMTAiIHI9IjkwIi8+PC9nPjxlbGxpcHNlIGN4PSIzMjAiIGN5PSIxMjUiIHJ4PSI4MCIgcnk9IjI2IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTI0MCAxMjV2OTBjMCAxNCAzNiAyNiA4MCAyNnM4MC0xMiA4MC0yNnYtOTBjMCAxNC0zNiAyNi04MCAyNnMtODAtMTItODAtMjZ6IiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIuOSIvPjxwYXRoIGQ9Ik0yNDAgMTcwYzAgMTQgMzYgMjYgODAgMjZzODAtMTIgODAtMjYiIHN0cm9rZT0iIzI1NjNFQiIgc3Ryb2tlLXdpZHRoPSI1IiBmaWxsPSJub25lIi8+PC9zdmc+", "courses/fullstack": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMzYwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMxMjNhN2EiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwNkI2RDQiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNjQwIiBoZWlnaHQ9IjM2MCIgZmlsbD0idXJsKCNnKSIvPjxnIGZpbGw9IiNmZmYiIG9wYWNpdHk9Ii4xMiI+PGNpcmNsZSBjeD0iNzAiIGN5PSI3MCIgcj0iNjAiLz48Y2lyY2xlIGN4PSI1OTAiIGN5PSIzMTAiIHI9IjkwIi8+PC9nPjxyZWN0IHg9IjIxNSIgeT0iMTAwIiB3aWR0aD0iMTMwIiBoZWlnaHQ9Ijk1IiByeD0iMTIiIGZpbGw9IiNmZmYiLz48cmVjdCB4PSIyMzUiIHk9IjEyNSIgd2lkdGg9IjkwIiBoZWlnaHQ9IjEwIiByeD0iNSIgZmlsbD0iIzI1NjNFQiIvPjxyZWN0IHg9IjIzNSIgeT0iMTUwIiB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHJ4PSI1IiBmaWxsPSIjMDZCNkQ0Ii8+PGcgZmlsbD0iIzBCMUYzQSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjQiPjxyZWN0IHg9IjMyMCIgeT0iMTcwIiB3aWR0aD0iMTEwIiBoZWlnaHQ9IjM0IiByeD0iOSIvPjxyZWN0IHg9IjMyMCIgeT0iMjEyIiB3aWR0aD0iMTEwIiBoZWlnaHQ9IjM0IiByeD0iOSIvPjwvZz48Y2lyY2xlIGN4PSIzNDIiIGN5PSIxODciIHI9IjUiIGZpbGw9IiMzNGQzOTkiLz48Y2lyY2xlIGN4PSIzNDIiIGN5PSIyMjkiIHI9IjUiIGZpbGw9IiMzNGQzOTkiLz48L3N2Zz4=", "courses/net": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMzYwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMwQjFGM0EiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyNTYzRUIiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNjQwIiBoZWlnaHQ9IjM2MCIgZmlsbD0idXJsKCNnKSIvPjxnIGZpbGw9IiNmZmYiIG9wYWNpdHk9Ii4xMiI+PGNpcmNsZSBjeD0iNzAiIGN5PSI3MCIgcj0iNjAiLz48Y2lyY2xlIGN4PSI1OTAiIGN5PSIzMTAiIHI9IjkwIi8+PC9nPjxnIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSI1Ij48cGF0aCBkPSJNMzIwIDEyMEwyNTAgMjIwTTMyMCAxMjBMMzkwIDIyME0yNTAgMjIwaDE0MCIvPjwvZz48ZyBmaWxsPSIjMDZCNkQ0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iNCI+PGNpcmNsZSBjeD0iMzIwIiBjeT0iMTIwIiByPSIyNCIvPjxjaXJjbGUgY3g9IjI1MCIgY3k9IjIyMCIgcj0iMjQiLz48Y2lyY2xlIGN4PSIzOTAiIGN5PSIyMjAiIHI9IjI0Ii8+PC9nPjwvc3ZnPg==", "courses/python": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMzYwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMyNTYzRUIiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwNkI2RDQiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNjQwIiBoZWlnaHQ9IjM2MCIgZmlsbD0idXJsKCNnKSIvPjxnIGZpbGw9IiNmZmYiIG9wYWNpdHk9Ii4xMiI+PGNpcmNsZSBjeD0iNzAiIGN5PSI3MCIgcj0iNjAiLz48Y2lyY2xlIGN4PSI1OTAiIGN5PSIzMTAiIHI9IjkwIi8+PC9nPjx0ZXh0IHg9IjMyMCIgeT0iMjI1IiBmb250LWZhbWlseT0ibW9ub3NwYWNlIiBmb250LXNpemU9IjExMCIgZm9udC13ZWlnaHQ9IjcwMCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Jmd0O188L3RleHQ+PHJlY3QgeD0iMjMwIiB5PSIxMjAiIHdpZHRoPSIxODAiIGhlaWdodD0iOCIgcng9IjQiIGZpbGw9IiNmZmYiIG9wYWNpdHk9Ii40Ii8+PC9zdmc+", "courses/web": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMzYwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMwQjFGM0EiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyNTYzRUIiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNjQwIiBoZWlnaHQ9IjM2MCIgZmlsbD0idXJsKCNnKSIvPjxnIGZpbGw9IiNmZmYiIG9wYWNpdHk9Ii4xMiI+PGNpcmNsZSBjeD0iNzAiIGN5PSI3MCIgcj0iNjAiLz48Y2lyY2xlIGN4PSI1OTAiIGN5PSIzMTAiIHI9IjkwIi8+PC9nPjxyZWN0IHg9IjIzMCIgeT0iMTEwIiB3aWR0aD0iMTgwIiBoZWlnaHQ9IjEzMCIgcng9IjEyIiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTIzMCAxNDBoMTgwIiBzdHJva2U9IiMyNTYzRUIiIHN0cm9rZS13aWR0aD0iNCIvPjxjaXJjbGUgY3g9IjI0OCIgY3k9IjEyNSIgcj0iNCIgZmlsbD0iIzA2QjZENCIvPjxjaXJjbGUgY3g9IjI2MiIgY3k9IjEyNSIgcj0iNCIgZmlsbD0iIzA2QjZENCIvPjxyZWN0IHg9IjI0NiIgeT0iMTU2IiB3aWR0aD0iNzAiIGhlaWdodD0iNjQiIHJ4PSI2IiBmaWxsPSIjMDZCNkQ0Ii8+PHJlY3QgeD0iMzI2IiB5PSIxNTYiIHdpZHRoPSI2OCIgaGVpZ2h0PSIxNCIgcng9IjYiIGZpbGw9IiNjYmQ1ZTEiLz48cmVjdCB4PSIzMjYiIHk9IjE4MCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjE0IiByeD0iNiIgZmlsbD0iI2NiZDVlMSIvPjwvc3ZnPg==", "team/AR": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNlMGYyZmUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNiZmRiZmUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0idXJsKCNnKSIvPjxwYXRoIGQ9Ik0zMCAyMDBjMC00NSAzMC02NSA3MC02NXM3MCAyMCA3MCA2NXoiIGZpbGw9IiMyNTYzRUIiLz48cmVjdCB4PSI4OCIgeT0iMTA1IiB3aWR0aD0iMjQiIGhlaWdodD0iMzIiIGZpbGw9IiNlOGI4OTQiLz48Y2lyY2xlIGN4PSIxMDAiIGN5PSI4MCIgcj0iMzgiIGZpbGw9IiNlOGI4OTQiLz48cGF0aCBkPSJNNjIgNzhjMC0zMCAyMC00NCA0MC00NHMzOCAxNCAzNiA0NGMtOC0xNC0yMC0yMC0zOC0yMHMtMzAgNi0zOCAyMHoiIGZpbGw9IiMyYjFiMTIiLz48Y2lyY2xlIGN4PSI4NyIgY3k9Ijg0IiByPSI0IiBmaWxsPSIjMUUyOTNCIi8+PGNpcmNsZSBjeD0iMTEzIiBjeT0iODQiIHI9IjQiIGZpbGw9IiMxRTI5M0IiLz48cGF0aCBkPSJNODggMTAwcTEyIDkgMjQgMCIgc3Ryb2tlPSIjMUUyOTNCIiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg==", "team/CA": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNlMGYyZmUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNiZmRiZmUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0idXJsKCNnKSIvPjxwYXRoIGQ9Ik0zMCAyMDBjMC00NSAzMC02NSA3MC02NXM3MCAyMCA3MCA2NXoiIGZpbGw9IiMyNTYzRUIiLz48cmVjdCB4PSI4OCIgeT0iMTA1IiB3aWR0aD0iMjQiIGhlaWdodD0iMzIiIGZpbGw9IiNmMWM5YTUiLz48Y2lyY2xlIGN4PSIxMDAiIGN5PSI4MCIgcj0iMzgiIGZpbGw9IiNmMWM5YTUiLz48cGF0aCBkPSJNNjIgNzhjMC0zMCAyMC00NCA0MC00NHMzOCAxNCAzNiA0NGMtOC0xNC0yMC0yMC0zOC0yMHMtMzAgNi0zOCAyMHoiIGZpbGw9IiMxMTEiLz48Y2lyY2xlIGN4PSI4NyIgY3k9Ijg0IiByPSI0IiBmaWxsPSIjMUUyOTNCIi8+PGNpcmNsZSBjeD0iMTEzIiBjeT0iODQiIHI9IjQiIGZpbGw9IiMxRTI5M0IiLz48cGF0aCBkPSJNODggMTAwcTEyIDkgMjQgMCIgc3Ryb2tlPSIjMUUyOTNCIiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg==", "team/CB": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNlMGYyZmUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNiZmRiZmUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0idXJsKCNnKSIvPjxwYXRoIGQ9Ik0zMCAyMDBjMC00NSAzMC02NSA3MC02NXM3MCAyMCA3MCA2NXoiIGZpbGw9IiMwNkI2RDQiLz48cmVjdCB4PSI4OCIgeT0iMTA1IiB3aWR0aD0iMjQiIGhlaWdodD0iMzIiIGZpbGw9IiM4ZDU1MjQiLz48Y2lyY2xlIGN4PSIxMDAiIGN5PSI4MCIgcj0iMzgiIGZpbGw9IiM4ZDU1MjQiLz48cGF0aCBkPSJNNjIgNzhjMC0zMCAyMC00NCA0MC00NHMzOCAxNCAzNiA0NGMtOC0xNC0yMC0yMC0zOC0yMHMtMzAgNi0zOCAyMHoiIGZpbGw9IiMyYjFiMTIiLz48Y2lyY2xlIGN4PSI4NyIgY3k9Ijg0IiByPSI0IiBmaWxsPSIjMUUyOTNCIi8+PGNpcmNsZSBjeD0iMTEzIiBjeT0iODQiIHI9IjQiIGZpbGw9IiMxRTI5M0IiLz48cGF0aCBkPSJNODggMTAwcTEyIDkgMjQgMCIgc3Ryb2tlPSIjMUUyOTNCIiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg==", "team/CC": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNlMGYyZmUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNiZmRiZmUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0idXJsKCNnKSIvPjxwYXRoIGQ9Ik0zMCAyMDBjMC00NSAzMC02NSA3MC02NXM3MCAyMCA3MCA2NXoiIGZpbGw9IiMwQjFGM0EiLz48cmVjdCB4PSI4OCIgeT0iMTA1IiB3aWR0aD0iMjQiIGhlaWdodD0iMzIiIGZpbGw9IiNmMWM5YTUiLz48Y2lyY2xlIGN4PSIxMDAiIGN5PSI4MCIgcj0iMzgiIGZpbGw9IiNmMWM5YTUiLz48cGF0aCBkPSJNNjIgNzhjMC0zMCAyMC00NCA0MC00NHMzOCAxNCAzNiA0NGMtOC0xNC0yMC0yMC0zOC0yMHMtMzAgNi0zOCAyMHoiIGZpbGw9IiM2YjNmMWQiLz48Y2lyY2xlIGN4PSI4NyIgY3k9Ijg0IiByPSI0IiBmaWxsPSIjMUUyOTNCIi8+PGNpcmNsZSBjeD0iMTEzIiBjeT0iODQiIHI9IjQiIGZpbGw9IiMxRTI5M0IiLz48cGF0aCBkPSJNODggMTAwcTEyIDkgMjQgMCIgc3Ryb2tlPSIjMUUyOTNCIiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg==", "team/IA": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNlMGYyZmUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNiZmRiZmUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0idXJsKCNnKSIvPjxwYXRoIGQ9Ik0zMCAyMDBjMC00NSAzMC02NSA3MC02NXM3MCAyMCA3MCA2NXoiIGZpbGw9IiMyNTYzRUIiLz48cmVjdCB4PSI4OCIgeT0iMTA1IiB3aWR0aD0iMjQiIGhlaWdodD0iMzIiIGZpbGw9IiM4ZDU1MjQiLz48Y2lyY2xlIGN4PSIxMDAiIGN5PSI4MCIgcj0iMzgiIGZpbGw9IiM4ZDU1MjQiLz48cGF0aCBkPSJNNjIgNzhjMC0zMCAyMC00NCA0MC00NHMzOCAxNCAzNiA0NGMtOC0xNC0yMC0yMC0zOC0yMHMtMzAgNi0zOCAyMHoiIGZpbGw9IiMxMTEiLz48Y2lyY2xlIGN4PSI4NyIgY3k9Ijg0IiByPSI0IiBmaWxsPSIjMUUyOTNCIi8+PGNpcmNsZSBjeD0iMTEzIiBjeT0iODQiIHI9IjQiIGZpbGw9IiMxRTI5M0IiLz48cGF0aCBkPSJNODggMTAwcTEyIDkgMjQgMCIgc3Ryb2tlPSIjMUUyOTNCIiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg==", "team/IB": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNlMGYyZmUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNiZmRiZmUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0idXJsKCNnKSIvPjxwYXRoIGQ9Ik0zMCAyMDBjMC00NSAzMC02NSA3MC02NXM3MCAyMCA3MCA2NXoiIGZpbGw9IiMwNkI2RDQiLz48cmVjdCB4PSI4OCIgeT0iMTA1IiB3aWR0aD0iMjQiIGhlaWdodD0iMzIiIGZpbGw9IiNlOGI4OTQiLz48Y2lyY2xlIGN4PSIxMDAiIGN5PSI4MCIgcj0iMzgiIGZpbGw9IiNlOGI4OTQiLz48cGF0aCBkPSJNNjIgNzhjMC0zMCAyMC00NCA0MC00NHMzOCAxNCAzNiA0NGMtOC0xNC0yMC0yMC0zOC0yMHMtMzAgNi0zOCAyMHoiIGZpbGw9IiM0YTJjMTciLz48Y2lyY2xlIGN4PSI4NyIgY3k9Ijg0IiByPSI0IiBmaWxsPSIjMUUyOTNCIi8+PGNpcmNsZSBjeD0iMTEzIiBjeT0iODQiIHI9IjQiIGZpbGw9IiMxRTI5M0IiLz48cGF0aCBkPSJNODggMTAwcTEyIDkgMjQgMCIgc3Ryb2tlPSIjMUUyOTNCIiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg==", "team/IC": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNlMGYyZmUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNiZmRiZmUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0idXJsKCNnKSIvPjxwYXRoIGQ9Ik0zMCAyMDBjMC00NSAzMC02NSA3MC02NXM3MCAyMCA3MCA2NXoiIGZpbGw9IiMxMjNhN2EiLz48cmVjdCB4PSI4OCIgeT0iMTA1IiB3aWR0aD0iMjQiIGhlaWdodD0iMzIiIGZpbGw9IiNjNjg2NDIiLz48Y2lyY2xlIGN4PSIxMDAiIGN5PSI4MCIgcj0iMzgiIGZpbGw9IiNjNjg2NDIiLz48cGF0aCBkPSJNNjIgNzhjMC0zMCAyMC00NCA0MC00NHMzOCAxNCAzNiA0NGMtOC0xNC0yMC0yMC0zOC0yMHMtMzAgNi0zOCAyMHoiIGZpbGw9IiMyYjFiMTIiLz48Y2lyY2xlIGN4PSI4NyIgY3k9Ijg0IiByPSI0IiBmaWxsPSIjMUUyOTNCIi8+PGNpcmNsZSBjeD0iMTEzIiBjeT0iODQiIHI9IjQiIGZpbGw9IiMxRTI5M0IiLz48cGF0aCBkPSJNODggMTAwcTEyIDkgMjQgMCIgc3Ryb2tlPSIjMUUyOTNCIiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg==", "team/LM": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNlMGYyZmUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNiZmRiZmUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0idXJsKCNnKSIvPjxwYXRoIGQ9Ik0zMCAyMDBjMC00NSAzMC02NSA3MC02NXM3MCAyMCA3MCA2NXoiIGZpbGw9IiMwNkI2RDQiLz48cmVjdCB4PSI4OCIgeT0iMTA1IiB3aWR0aD0iMjQiIGhlaWdodD0iMzIiIGZpbGw9IiNjNjg2NDIiLz48Y2lyY2xlIGN4PSIxMDAiIGN5PSI4MCIgcj0iMzgiIGZpbGw9IiNjNjg2NDIiLz48cGF0aCBkPSJNNjIgNzhjMC0zMCAyMC00NCA0MC00NHMzOCAxNCAzNiA0NGMtOC0xNC0yMC0yMC0zOC0yMHMtMzAgNi0zOCAyMHoiIGZpbGw9IiMxMTEiLz48Y2lyY2xlIGN4PSI4NyIgY3k9Ijg0IiByPSI0IiBmaWxsPSIjMUUyOTNCIi8+PGNpcmNsZSBjeD0iMTEzIiBjeT0iODQiIHI9IjQiIGZpbGw9IiMxRTI5M0IiLz48cGF0aCBkPSJNODggMTAwcTEyIDkgMjQgMCIgc3Ryb2tlPSIjMUUyOTNCIiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg==" };
        // JHORKA IT shared behavior
        const COURSES = [
            { id: 'web', t: 'Web Development', c: 'Web', l: 'Beginner', d: '12 weeks', f: 'Fee: placeholder', s: 'HTML, CSS and JavaScript to build responsive sites.', pre: 'Basic computer skills', learn: ['Build responsive pages', 'Write JavaScript', 'Publish a site'], mods: ['HTML & CSS', 'JavaScript basics', 'Responsive design', 'Final project'], car: ['Frontend developer', 'Web designer', 'Freelancer'] },
            { id: 'fullstack', t: 'Full-Stack Development', c: 'Web', l: 'Intermediate', d: '16 weeks', f: 'Fee: placeholder', s: 'Frontend and backend skills with databases.', pre: 'HTML, CSS, JS basics', learn: ['Build APIs', 'Connect databases', 'Deploy apps'], mods: ['Frontend frameworks', 'Server basics', 'Databases', 'Capstone'], car: ['Full-stack developer', 'Backend developer'] },
            { id: 'python', t: 'Python Programming', c: 'Programming', l: 'Beginner', d: '8 weeks', f: 'Fee: placeholder', s: 'Learn programming from scratch with Python.', pre: 'None', learn: ['Core syntax', 'Functions and files', 'Small automation apps'], mods: ['Basics', 'Data structures', 'Functions', 'Mini projects'], car: ['Junior developer', 'Automation specialist'] },
            { id: 'db', t: 'Database Management', c: 'Data', l: 'Beginner', d: '6 weeks', f: 'Fee: placeholder', s: 'SQL, design and managing data.', pre: 'Basic computer skills', learn: ['Write SQL queries', 'Design tables', 'Manage data'], mods: ['Relational basics', 'SQL', 'Design', 'Project'], car: ['Database assistant', 'Data entry analyst'] },
            { id: 'data', t: 'Data Analysis', c: 'Data', l: 'Intermediate', d: '10 weeks', f: 'Fee: placeholder', s: 'Clean, analyze and present data.', pre: 'Spreadsheet basics', learn: ['Clean data', 'Make charts', 'Tell a data story'], mods: ['Spreadsheets', 'Python for data', 'Visualization', 'Project'], car: ['Data analyst', 'Reporting analyst'] },
            { id: 'net', t: 'Networking Fundamentals', c: 'Security', l: 'Beginner', d: '8 weeks', f: 'Fee: placeholder', s: 'How networks work and how to troubleshoot them.', pre: 'None', learn: ['IP addressing', 'Routing basics', 'Troubleshooting'], mods: ['Network models', 'Addressing', 'Switching', 'Lab work'], car: ['Network technician', 'IT support'] },
            { id: 'cyber', t: 'Cybersecurity Basics', c: 'Security', l: 'Beginner', d: '8 weeks', f: 'Fee: placeholder', s: 'Understand threats and protect systems.', pre: 'Networking basics helpful', learn: ['Common threats', 'Safe practices', 'Basic hardening'], mods: ['Threat landscape', 'Passwords & access', 'Network security', 'Case studies'], car: ['Security analyst (junior)', 'IT support'] },
            { id: 'career', t: 'Career Readiness for IT', c: 'Career', l: 'All levels', d: '4 weeks', f: 'Fee: placeholder', s: 'CV, portfolio and interview preparation.', pre: 'None', learn: ['Write a strong CV', 'Build a portfolio', 'Interview confidently'], mods: ['CV', 'Portfolio', 'Interviews', 'Mock interviews'], car: ['Any IT entry role'] }];
        const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
        const card = c => `<article class="card"><img class="thumb" src="${IMG['courses/' + c.id]}" alt="${c.t} course banner" loading="lazy"><span class="tag">${c.c}</span><h3>${c.t}</h3><p>${c.s}</p><div class="meta"><span>${c.d}</span><span>${c.l}</span><span>${c.f}</span></div><a class="btn btn-primary" href="#course-details?id=${c.id}">View Details</a></article>`;
        // nav
        const tg = $('.nav-toggle'), nl = $('.nav-links');
        const closeNav = () => {
            nl.classList.remove('open'); tg.setAttribute('aria-expanded', 'false');
            $$('.has-dd').forEach(item => { item.classList.remove('open'); $('.dd-btn', item).setAttribute('aria-expanded', 'false') })
        };
        tg.onclick = () => nl.classList.contains('open') ? closeNav() : (nl.classList.add('open'), tg.setAttribute('aria-expanded', 'true'));
        $$('.dd-btn').forEach(b => b.onclick = () => {
            const o = b.parentElement.classList.toggle('open'); b.setAttribute('aria-expanded', o)
        });
        $$('.nav-links a').forEach(a => a.addEventListener('click', closeNav));
        // theme toggle
        const themeToggle = $('#theme-toggle');
        const themeIcon = $('.theme-toggle-icon', themeToggle);
        const themeLabel = $('.theme-toggle-label', themeToggle);
        const setTheme = theme => {
            const isDark = theme === 'dark';
            document.documentElement.dataset.theme = theme;
            themeToggle.setAttribute('aria-pressed', String(isDark));
            themeToggle.setAttribute('aria-label', isDark ? 'Switch to day mode' : 'Switch to night mode');
            themeIcon.textContent = isDark ? '☾' : '☀';
            themeLabel.textContent = isDark ? 'Night mode' : 'Day mode';
        };
        let savedTheme = 'dark';
        try {
            const storedTheme = localStorage.getItem('jhorka-theme');
            if (storedTheme === 'light' || storedTheme === 'dark') savedTheme = storedTheme;
        } catch (error) {
            console.error('Unable to read the saved theme preference.', error);
        }
        setTheme(savedTheme);
        themeToggle.addEventListener('click', () => {
            const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
            setTheme(theme);
            try {
                localStorage.setItem('jhorka-theme', theme);
            } catch (error) {
                console.error('Unable to save the theme preference.', error);
            }
        });
        // back to top
        const tt = $('#toTop'); addEventListener('scroll', () => tt.classList.toggle('show', scrollY > 400)); tt.onclick = () => scrollTo({ top: 0, behavior: 'smooth' });
        // featured
        const fc = $('#featured-courses'); if (fc) fc.innerHTML = COURSES.slice(0, 3).map(card).join('');
        // courses list
        const grid = $('#course-grid');
        if (grid) {
            let cat = 'All';
            const q = $('#search'), level = $('#level-filter'), fee = $('#fee-filter');
            const hasPublishedFee = c => /\d/.test(c.f);
            const draw = () => {
                const k = q.value.trim().toLowerCase();
                const r = COURSES.filter(c =>
                    (cat === 'All' || c.c === cat) &&
                    (level.value === 'All' || c.l === level.value) &&
                    (fee.value === 'All' ||
                        (fee.value === 'published' ? hasPublishedFee(c) : !hasPublishedFee(c))) &&
                    (c.t + c.s + c.f).toLowerCase().includes(k)
                );
                grid.innerHTML = r.map(card).join('');
                $('#no-results').hidden = r.length > 0;
            };
            q.oninput = draw;
            level.onchange = draw;
            fee.onchange = draw;
            $$('.filters .chip').forEach(b => b.onclick = () => {
                $$('.filters .chip').forEach(x => {
                    x.classList.remove('active');
                    x.setAttribute('aria-pressed', 'false');
                });
                b.classList.add('active');
                b.setAttribute('aria-pressed', 'true');
                cat = b.dataset.cat;
                draw();
            });
            draw();
        }
        // details
        function renderDetails() {
            const c = COURSES.find(x => x.id == (location.hash.split('id=')[1] || '')) || COURSES[0];
            $('#cd-title').textContent = c.t; $('#cd-thumb').src = IMG['courses/' + c.id]; $('#cd-sub').textContent = c.s; $('#cd-overview').textContent = c.s + ' This course is project-based and taught by JHORKA IT instructors.';
            $('#cd-dur').textContent = c.d; $('#cd-level').textContent = c.l; $('#cd-fee').textContent = c.f; $('#cd-pre').textContent = c.pre;
            $('#cd-learn').innerHTML = c.learn.map(x => `<li>${x}</li>`).join(''); $('#cd-careers').innerHTML = c.car.map(x => `<li>${x}</li>`).join('');
            $('#cd-modules').innerHTML = c.mods.map((m, i) => `<div class="acc-item"><button class="acc-btn" aria-expanded="false">Module ${i + 1}: ${m}</button><div class="acc-panel"><p>Topics, exercises and a short assessment (placeholder outline).</p></div></div>`).join('');
        } renderDetails(); addEventListener('hashchange', renderDetails);
        // accordion
        $$('.acc').forEach(a => a.addEventListener('click', e => {
            const b = e.target.closest('.acc-btn'); if (!b) return; const i = b.parentElement, o = !i.classList.contains('open'), p = $('.acc-panel', i);
            i.classList.toggle('open', o); b.setAttribute('aria-expanded', o); p.style.maxHeight = o ? p.scrollHeight + 'px' : 0
        }));
        // counters

        // Demo form validation (no data is sent or saved)
        const emailOk = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), phoneOk = v => /^[+]?[0-9\s-]{7,15}$/.test(v);
        function checkField(el) {
            const box = el.closest('.field'), err = box.querySelector('.err'), v = el.value.trim(); let m = '';
            if (el.required && !v) m = 'This field is required.'; else if (v && el.type == 'email' && !emailOk(v)) m = 'Enter a valid email address.'; else if (v && el.type == 'tel' && !phoneOk(v)) m = 'Enter a valid phone number.';
            err.textContent = m; box.classList.toggle('bad', !!m); return !m
        }
document.querySelectorAll('form[data-validate]').forEach(f => {

    // Keep existing validation
    f.querySelectorAll('input,select,textarea').forEach(el => {
        el.addEventListener('blur', () => checkField(el));
    });

    f.addEventListener('submit', async e => {
        e.preventDefault();

        const ok = [...f.querySelectorAll('input,select,textarea')]
            .map(checkField)
            .every(Boolean);

        const m = f.querySelector('.msg');

        if (!ok) {
            m.textContent = 'Please fill in the form correctly.';
            return;
        }

        const button = f.querySelector('button[type="submit"]');

        button.disabled = true;
        m.textContent = 'Submitting...';

        try {
            const name = f.elements['name'].value.trim();
            const email = f.elements['email'].value.trim();

            // 1. ADMISSION FORM
            if (f.id === 'admit') {

                const courseName = f.elements['course'].value;

                const { data: course, error: courseError } =
                    await supabaseClient
                        .from('courses')
                        .select('id')
                        .eq('title', courseName)
                        .limit(1)
                        .single();

                if (courseError) throw courseError;

                const { error } = await supabaseClient
                    .from('admissions')
                    .insert({
                        student_name: name,
                        email: email,
                        phone: f.elements['phone'].value.trim(),
                        course_id: course.id,
                        mode: f.elements['mode'].value,
                        notes: f.elements['message'].value.trim()
                    });

                if (error) throw error;
            }

            // 2. CONSULTANCY FORM
            else if (f.id === 'consult') {

                const { error } = await supabaseClient
                    .from('consultations')
                    .insert({
                        name: name,
                        email: email,
                        phone: f.elements['phone'].value.trim(),
                        interest: f.elements['interest'].value,
                        message: f.elements['message'].value.trim()
                    });

                if (error) throw error;
            }

            // 3. CONTACT FORM
            else if (f.id === 'contact') {

                const { error } = await supabaseClient
    .from('contacts')
    .insert({
        name: name,
        email: email,
        phone: f.elements['phone'].value.trim(),
        subject: f.elements['subject'].value.trim(),
        message: f.elements['message'].value.trim()
    });

                if (error) throw error;
            }

            else {
                throw new Error('Unknown form');
            }

            m.textContent = 'Submitted successfully!';
            f.reset();

        } catch (error) {
            console.error('Form submission error:', error);
            m.textContent = 'Submission failed. Please try again.';

        } finally {
            button.disabled = false;
        }
    });
});
        document.querySelectorAll('form[data-newsletter]').forEach(f => f.addEventListener('submit', e => {
            e.preventDefault(); const i = f.querySelector('input'), m = f.querySelector('.msg');
            m.textContent = emailOk(i.value.trim()) ? 'Subscribed (demo only, no email saved).' : 'Please enter a valid email.'; if (emailOk(i.value.trim())) f.reset()
        }));

        function route() {
            const p = (location.hash.slice(1) || 'index').split('?')[0]; const el = document.getElementById('pg-' + p) || document.getElementById('pg-index');
            document.querySelectorAll('.pg').forEach(x => x.hidden = x !== el); document.title = el.dataset.title;
            document.querySelectorAll('.nav-links a:not(.btn)').forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + (el.id.slice(3))));
            closeNav(); scrollTo(0, 0)
        }
        addEventListener('hashchange', route); route();/* ===== Modern animations ===== */
        (function () {
            const rm = matchMedia('(prefers-reduced-motion:reduce)').matches;
            const bar = document.createElement('div'); bar.id = 'progress'; document.body.appendChild(bar);
            const hd = document.querySelector('.site-header');
            function onScroll() { const h = document.documentElement; bar.style.width = (scrollY / ((h.scrollHeight - innerHeight) || 1) * 100) + '%'; hd.classList.toggle('scrolled', scrollY > 20) }
            addEventListener('scroll', onScroll, { passive: true }); onScroll();
            document.querySelectorAll('[data-count]').forEach(el => {
                const n = +el.dataset.count; if (rm) { el.textContent = n; return } el.textContent = 0;
                const o = new IntersectionObserver(([e]) => { if (!e.isIntersecting) return; o.disconnect(); const s = performance.now(); (function f(now) { const p = Math.min((now - s) / 1400, 1); el.textContent = Math.round(n * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(f) })(s) }); o.observe(el)
            });
            if (rm) return;
            const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); setTimeout(() => e.target.classList.add('done'), 1300); io.unobserve(e.target) } }), { threshold: .12 });
            const SEL = '.section h2,.section .lead,.grid>*,.two>*,.acc-item,.steps li,.cta .container>*,.toolbar,.map';
            function apply() { document.querySelectorAll(SEL).forEach(el => { if (el.dataset.rv) return; el.dataset.rv = 1; const i = [...el.parentElement.children].indexOf(el); el.style.setProperty('--d', Math.min(i, 6) * .08 + 's'); el.classList.add('reveal'); io.observe(el) }) }
            apply(); let t; new MutationObserver(() => { clearTimeout(t); t = setTimeout(apply, 30) }).observe(document.body, { childList: true, subtree: true });
        })();
