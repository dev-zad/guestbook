"use client";
import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../../firebaseConfig';
import { Button } from "@/components/ui/button";

const isError = (error: unknown): error is Error => {
    return (error as Error).message !== undefined;
};

export function GoogleSignIn() {
    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            // Redirect or show success message
        } catch (err) {
            if (isError(err)) {
                console.error("Error during Google Sign-In: ", err.message);
            } else {
                console.error("Error during Google Sign-In: ", err);
            }
        }
    };

    return (
        <Button onClick={handleGoogleSignIn}>Sign in with Google</Button>
    );
};

