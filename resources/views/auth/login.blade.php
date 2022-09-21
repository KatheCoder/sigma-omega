@extends('layouts.app')

@section('content')
    <div class="container ">
        <div class="d-flex justify-content-center">

        <div class="    ">
            <div class="col-md-12">

                <form method="POST" action="{{ route('login') }}" class="form-signin">
                    @csrf
                    <h3 class="form-signin-heading">Dashboard Login</h3>

                    <input id="username" type="text" class="form-control @error('username') is-invalid @enderror"
                           name="username" value="{{ old('username') }}" required autocomplete="username" autofocus
                           placeholder="username">

                    @error('username')
                    <span class="invalid-feedback" role="alert">
                                                            <strong>{{ $message }}</strong>
                                                        </span>
                    @enderror
                    <input id="password" placeholder="password" type="password"
                           class="form-control @error('password') is-invalid @enderror" name="password" required
                           autocomplete="current-password">

                    @error('password')
                    <span class="invalid-feedback" role="alert">
                                                            <strong>{{ $message }}</strong>
                                                        </span>
                    @enderror


                    <button type="submit" class="btn btn-lg btn-primary btn-block">
                        {{ __('Sign In') }}
                    </button>
                </form>

            </div>
        </div>
        </div>
    </div>
@endsection
